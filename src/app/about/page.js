

async function takeTime(){
    await new Promise((resvole)=>{
        throw new Error("error")
        setTimeout(resvole,3000)
    });
}

async function page() {
await takeTime()
  return (
    <div>about</div>
  )
}

export default page