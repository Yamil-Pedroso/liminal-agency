import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import MainLayout from "@/Layouts/MainLayout";
import ModalView from "@/components/common/modal/ModalView";
import CustomCursor from "@/components/CustomCursor";
import { MenuProvider } from "@/components/context/MenuContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <MenuProvider>
      <MainLayout>
        <ModalView />
        <CustomCursor />
        <Outlet />
      </MainLayout>
    </MenuProvider>
  );
}
