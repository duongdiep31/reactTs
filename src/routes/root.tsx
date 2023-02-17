import App from 'src/App'
import {RouteObject} from 'react-router/dist/lib/context'

type ObjectChild = RouteObject & {
    res: string;
}
const router: ObjectChild[] = [
    {
        path: '/childre/:id',
        element: <App />,
        res: "child"
    }
]

export default router

export const loaderUser = async (params: any): Promise<string> =>{
        console.log("params", params)

        return "loader"
}