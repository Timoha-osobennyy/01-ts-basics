function printUserInfo(name: string, age: number, email?: string): void {
    console.log("Имя:", name);
    console.log("Возраст:", age);
    if (email) {
      console.log("Адрес электронной почты:", email);
    }
  }
  
  printUserInfo("Алиса", 30);
  printUserInfo("Боб", 25, "bob@mail.com");