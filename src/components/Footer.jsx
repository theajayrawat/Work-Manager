import React from 'react'

function Footer() {
  return (
    <footer className="h-40 bg-blue-600">
        <div className="flex p-5 justify-around">
            <div className="text-center flex flex-col justify-center">
                <h1>Welcime to manager Work</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure debitis maiores, nostrum incidunt sequi necessitatibus quae adipisci! Delectus suscipit quasi aspernatur tempore est. Dicta quod voluptate unde nihil. Ea.</p>
            </div>
            <div className="text-center ">
                <h1>Important Link</h1>
                <ul>
                    <li>
                        <a href="#">Linkdin</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer