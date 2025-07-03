function logStatus(status: "loading" | "success" | "error"): void {
    if (status === "loading") {
      console.log("Загрузка..."); 
    } else if (status === "success") {
      console.log("Успех!"); 
    } else if (status === "error") {
      console.log("Что-то пошло не так");
    }
  }
  
  logStatus("loading");