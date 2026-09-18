import axios from "axios";
import { NextResponse } from "next/server";
import { getGitHubUser } from "@/lib/github";
import { RouteProps } from "@/types";

export async function GET(_: Request, { params }: RouteProps) {
  const { username } = await params;

  try {
    const user = await getGitHubUser(username);

    return NextResponse.json(user);
  } catch (error) {
    const status = axios.isAxiosError(error) ? error.response?.status : 500;

    return NextResponse.json(
      { message: "Usuário não encontrado." },
      { status: status === 404 ? 404 : 500 },
    );
  }
}
