<script lang="ts">
    export let message: string =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque" + " " +
        "eum nisi neque, quis, maxime ut quos cumque sint iusto quod" + " " +
        "cupiditate deserunt consequatur iste odit dolores sed velit" + " " +
        "consequuntur! Vel amet reprehenderit quisquam error velit aperiam" + " " +
        "itaque autem, facere recusandae placeat nisi non porro? Perspiciatis" + " " +
        "culpa labore itaque harum sequi, in, excepturi corrupti laudantium" + " " +
        "deleniti facere eos enim ea.";

    let mysqlTimestamp: string = "2024-10-23 20:30:00";
</script>

<div
    class="w-full my-4 p-4 flex hover:bg-neutral-900 duration-150 gap-6 rounded-lg"
>
    <div>
        <div class="w-16 aspect-square h-auto">
            <div
                class="w-full h-full rounded-full flex justify-center items-center overflow-hidden"
            >
                <img
                    src="https://via.placeholder.com/64"
                    alt="XMLHttpRequest's profile"
                />
            </div>
        </div>
    </div>
    <div class="flex-10 flex flex-col">
        <div class="flex items-center gap-4 mb-2">
            <h2 class="font-semibold text-lg">XMLHttpRequest</h2>
            <p class="cursor-default text-neutral-400">
                {new Date()}
            </p>
        </div>
        <p>
            {message}
        </p>
    </div>
</div>
