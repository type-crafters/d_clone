<script lang="ts">
    function resizeTextbox(event: Event) {
        const box = event.target as HTMLTextAreaElement;
        box.style.height = "auto";
        box.style.height = box.scrollHeight + "px";
    }
    function sendOnEnter(event: KeyboardEvent) {
        // const box = event.target as HTMLTextAreaElement;

        if(event.key == "Enter" && !event.shiftKey) {
            event.preventDefault();
            /*Send message*/
        }
    }
</script>

<div id="message-box-container" class="w-full py-4">
    <div id="message-box-wrapper" class="w-full flex gap-4 bg-neutral-700 rounded-lg px-4 py-1">
        <button aria-label="Upload..." class="text-neutral-200 transform hover:scale-110 active:scale-100 duration-150">
            <i class="bi bi-plus-circle text-xl"></i>
        </button>
        <textarea name="message" id="message" autocomplete="off"placeholder="Type a message" rows="1"
            class="text-lg focus:outline-none flex-1 resize-none h-8 max-h-52 bg-transparent placeholder:text-neutral-400"
            on:input={resizeTextbox}
            on:keydown={sendOnEnter}
        ></textarea>
        <button aria-label="Emoji..." class="text-neutral-200 transform hover:scale-110 active:scale-100 duration-150">
            <i class="bi bi-emoji-smile text-xl"></i>
        </button>
    </div>
</div>

<style lang="postcss">

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #262626;
        border-radius: 2px;
        transition: all 150ms;
        cursor: pointer
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>
