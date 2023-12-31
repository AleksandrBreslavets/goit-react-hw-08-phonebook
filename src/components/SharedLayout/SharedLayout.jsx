import {AppBar} from "components/AppBar/AppBar";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <AppBar />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};