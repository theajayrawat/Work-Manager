import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   const authToken=request.cookies.get("loginToken")?.value;
   const loggedInUserNotAccessPaths=
   request.nextUrl.pathname==="/login" || 
   request.nextUrl.pathname=="/singup" 

   if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
        return;
   }
    
   if(loggedInUserNotAccessPaths){
        if(authToken){
            return NextResponse.redirect(new URL("/profile/user", request.url));
        }
   }
   else{
    if(!authToken){
        if(request.nextUrl.pathname.startsWith("/api")){
            return NextResponse.json({
                message:"Access denied"
            },{
                status:401,
            })
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }
    else{
        //verify
    }
   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/","/login", "/signup", "/add-task", "/api/:path*", "/show-task", "/profile/:path*"],
};
