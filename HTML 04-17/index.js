// 

      async function fun()
      {
        let api=await fetch("https://b4a7-2409-4085-2e13-e87-9994-c546-99e6-1f57.ngrok-free.app/contact");
        let response=await api.json();
        console.log(response);
      }
      fun();  