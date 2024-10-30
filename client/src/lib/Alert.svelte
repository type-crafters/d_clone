<script lang="ts">
    import { onMount } from "svelte";

    export let type: "success" | "info" | "warning" | "danger";
    export let messages: string | string[]
    let props: { [key: string]: string[] } = {
        "success": ["bg-emerald-200", "border-emerald-600", "text-emerald-600"],
        "info": ["bg-sky-200", "border-sky-600", "text-sky-600"],
        "warning": ["bg-yellow-200", "border-yellow-600", "text-yellow-600"],
        "danger": ["bg-red-200", "border-red-600", "text-red-600"],
    }

    let icons: { [key: string]: string } = {
        "success": "bi-check-lg",
        "info":  "bi-info-circle",
        "warning": "exclamation-circle",
        "danger": "bi-x-circle"
    }

    let visible: boolean = true;
    let displayed: boolean = true;

    onMount(() => {
        const timer = setTimeout(() => {
            visible = false;
            setTimeout(() => {
                displayed = false;
            }, 300);
        }, 4000);

        return () => {
            clearTimeout(timer);
            displayed = true;
        };
    });

    function closeAlert() {
        visible = false;
        displayed = false;
    }
</script>

{#if displayed}
<div class={"fixed top-4 right-4 border-2 py-2 px-4 flex items-center gap-4 hover:shadow-md hover:shadow-black w-fit max-w-2xl transition-all duration-300 " + (visible ? "opacity-1" : "opacity-0") + " " + props[type].join(" ")}>
    <i class={icons[type] + " flex justify-center items-center"}></i>
    <div>
        {#each messages as message}
        <p class="line-clamp-1">{message}</p>
        {/each}
    </div>
    <button on:click={closeAlert} aria-label="Close alert">
        <i class="bi bi-x-lg"></i>
    </button>
</div>
{/if}