export const Base_Url = "https://rsfpsoftware.gowild.co.in/";


let cachedToken = null;

export const Auth_Token =  () => {

    if (cachedToken === null) {
        cachedToken =  sessionStorage.getItem("token");
    }

    return cachedToken;
};

// export const Auth_Token = async () =>  { 
//     let token = await sessionStorage.getItem("token")
//     return token
// }




// https://my-cercles.co/#/auth/login
// export async function getToken() {
//   // return JSON.parse(sessionStorage.getItem("Token"));
//   return await localStorage.getItem("token")
//   // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2MDAzNmQyLWFlNWQtNDgxYi04YmRkLTZjNjc3MTYwOTg3YSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsImVtYWlsIjpudWxsLCJwaG9uZU5vIjoiOTY5MTM5MDk2NyIsInBob25lQ29kZSI6Iis5MSIsImRhdGVPZkJpcnRoIjpudWxsLCJnZW5kZXIiOm51bGwsInN0YXR1cyI6InBlbmRpbmciLCJjdXJyZW50TG9jYXRpb24iOm51bGwsImFjdHVhbExvY2F0aW9uIjpudWxsLCJjb21wYW55TmFtZSI6bnVsbCwiam9iVGl0bGUiOm51bGwsImluc3RhZ3JhbSI6bnVsbCwibGlua2VkaW4iOm51bGwsImlzSW5zdGFDb25uZWN0ZWQiOmZhbHNlLCJpc0xpbmtlZGluQ29ubmVjdGVkIjpmYWxzZSwiYmlvIjpudWxsLCJpc0FjdGl2ZSI6ZmFsc2UsIm90cCI6NTE5NzQ4LCJsYXN0U2NyZWVuTmFtZSI6bnVsbCwiY3VycmVuY3kiOiJVU0QiLCJzdHJpcGVDdXN0b21lcklkIjpudWxsLCJzdHJpcGVDb25uZWN0SWQiOm51bGwsInN0cmlwZUlkU3RhdGUiOiJSZXN0cmljdGVkIiwic3RyaXBlT25ib2FyZGluZ1VybCI6bnVsbCwic3RyaXBlT25ib2FyZGluZyI6dHJ1ZSwiYm9va2luZ0FuZFJlc2VydmF0aW9uQWN0aXZpdHlOb3RpZmljYXRpb24iOnRydWUsIm1lc3NhZ2VzTm90aWZpY2F0aW9uIjp0cnVlLCJyZW1pbmRlcnNOb3RpZmljYXRpb24iOnRydWUsImFubm91bmNlbWVudHNOb3RpZmljYXRpb24iOnRydWUsInRyYXZlbFBsYW5zTm90aWZpY2F0aW9uIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJ0aW1lem9uZSI6IkFzaWEvS29sa2F0YSIsImRldmljZVRva2VuIjoiMTIzNCIsImRldmljZVR5cGUiOiJhbmRyb2lkIiwiY3JlYXRlZEF0IjoiMjAyMy0xMC0wNVQxMToxMTo1Mi4wNzNaIiwidXBkYXRlZEF0IjoiMjAyMy0xMC0wNVQxMToxNToyNy4wMDBaIiwiaWF0IjoxNjk2NTA0NTQwLCJleHAiOjE2OTkwOTY1NDB9.TQkGDzeNwMo2OQQWOUE4qLdtJLEj2I8P0ZfsQt0I0h4"
// }
