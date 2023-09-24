import { createSignal, For, Show, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { RouteDataArgs, useRouteData } from "solid-start";
import server$ from "solid-start/server";
import { createServerAction$, createServerData$ } from "solid-start/server";
import { prisma } from "~/../prisma/prisma";

export default function App() {
    return <>This is the application</>
}
