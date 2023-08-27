import { NextResponse } from "next/server"

export function GET(request){
    const users=[{
        name:'Ajay Rawat',
        phone: '5252',
        course:'java',
    },
    {
        name:'Aush Rawat',
        phone: '5252',
        course:'java',
    },
    {
        name:'Manoj Rawat',
        phone: '5252',
        course:'java',
    },
]

return NextResponse.json(users)

}

export function POST(){
    
}

export function DELETE(request){
   console.log('Delete api called');
   return NextResponse.json({
    message:'deleted it',
    status:true,
   })
}

export function PUT(){
    
}