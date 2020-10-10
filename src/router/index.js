import Login from './../page/login';
import Main from './../page/main';
import Home from './../page/main/home';

const routers = [
    {
        name:'login',
        path:'/',
        component:Login,
        exact:true,
        children:[]
    },{
        name:'main',
        path:'/main',
        component:Main,
        //exact:true,
        children:[
            {
                name:'home',
                path:'/main/home',
                component:Home,
            }
        ]
    }
]

export default routers