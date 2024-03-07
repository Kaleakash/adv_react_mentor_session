import { NextResponse } from "next/server"

export async function GET() {
    let  customer = [
        {"id":100,"name":"Steven","age":21},
        {"id":101,"name":"Lex","age":24},
        {"id":102,"name":"Neea","age":28}
    ]
    return NextResponse.json(customer);
}