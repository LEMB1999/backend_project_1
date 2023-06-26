const axios = require("axios");


test("check invalid date", async ()=>{

    const invalidDate = "invalid";
    const {data} = await axios(`http://localhost:3000/api/${invalidDate}`);
    expect(data).toMatchObject({error:"Invalid Date"})

})

test("check date 1451001600000", async()=>{
    const date = "1451001600000"
    const {data} =  await axios(`http://localhost:3000/api/${date}`);
    expect(data).toMatchObject({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" })
})


test("Check without param date", async()=>{

    const {data} = await axios(`http://localhost:3000/api/`);
    expect(data).toHaveProperty("unix");
    expect(data).toHaveProperty("utc");

})