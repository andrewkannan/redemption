"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTestimonies() {
  try {
    const testimonies = await prisma.testimony.findMany({
      orderBy: { createdAt: "desc" },
    });
    return testimonies;
  } catch (error) {
    console.error("Failed to fetch testimonies:", error);
    return [];
  }
}

export async function createTestimony(formData: FormData) {
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;
  const tag = formData.get("tag") as string;

  if (!name || !content || !tag) {
    throw new Error("Missing required fields");
  }

  try {
    await prisma.testimony.create({
      data: {
        name,
        content,
        tag,
      },
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to create testimony:", error);
    return { success: false, error: "Failed to submit testimony" };
  }
}

export async function deleteTestimony(id: string) {
  try {
    await prisma.testimony.delete({
      where: { id },
    });
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete testimony:", error);
    return { success: false, error: "Failed to delete testimony" };
  }
}
