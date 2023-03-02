import React from 'react';
import {routes} from "../routes";
import {Routes, Route, Navigate} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(
                    ({path,Component})=> {
                        return <Route key={path} path={path} element={<Component/>}></Route>
                    }
                )
            }
            <Route path={"*"} element={<Navigate to={"/posts"}/>}/>
        </Routes>
    );
};

export default AppRouter;