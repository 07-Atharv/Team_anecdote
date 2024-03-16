export const BASEURL = "https://api-scorecraft.onrender.com";
export const TOKEN = "token"; 
export const GOOGLE_API_BASE = "https://www.googleapis.com/oauth2/v3/userinfo?access_token="
export const LOGGED_IN = "is_logged_in";
export const LANGUAGES_SUPPORTED ={
    "javascript" : "18.15.0",
    "python":"3.10.0",
    "java":"15.0.2",
    "c++":"10.2.0"
}


export const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Gautam");\n`,
   python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Gautam")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Gautam");\n\t}\n}\n`,
     cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, Gautam!";\n\treturn 0;\n}`,

  };