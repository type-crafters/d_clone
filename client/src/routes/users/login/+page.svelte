<script lang="ts">
    function togglePassword(){
        const inactive = ["text-gray-200", "hover:text-gray-300", "active:text-gray-400"];
        const active = ["text-blue-400", "hover:text-blue-500", "active:text-blue-600"];
        const show = document.getElementById("show-pass") as HTMLButtonElement;
        const input = document.getElementById("pass") as HTMLInputElement;

        if(input.type == "password") {
            input.type = "text";
            show.classList.remove(...inactive);
            show.classList.add(...active)
        } else if(input.type == "text") {
            input.type = "password";
            show.classList.remove(...active);
            show.classList.add(...inactive)
        }
    }

    function checkBox() {
        const checkbox = document.getElementById("remember") as HTMLInputElement;
        const check = document.getElementById("checked-checkbox") as HTMLDivElement;

        check.style.display = checkbox.checked ? "initial" : "none";
    }
</script>

<form id="login-form" method="post">
    <main id="form-page" class="container mx-auto h-screen grid place-items-center">
        <section id="form-container" class="sm:bg-neutral-700 lg:w-[600px] md:w-[480px] sm:w-[360px] w-full p-6 grid grid-flow-row gap-6 sm:shadow-md sm: shadow-black">
            <h2 class="text-2xl text-center font-bold">Log into your account</h2>
            <div class="input-container">
                <label for="account">Email, username or phone number</label>
                <div class="input-wrapper">
                    <input type="text" name="account" id="account" placeholder="mail@example.com" />
                </div>
            </div>
            <div class="input-container">
                <label for="pass">Password</label>
                <div class="input-wrapper">
                    <button type="button" on:click={togglePassword} id="show-pass" class="px-2">
                        <i class="bi bi-eye-fill flex justify-center items-center text-xl duration-150"></i>
                    </button>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" />
                </div>
            </div>
            <div class="input-container">
                <div class="flex max-[360px]:flex-col items-center gap-y-4 justify-between">
                    <div class="flex items-center gap-2">
                        <label for="remember" id="checkbox-styling" class="flex items-center justify-center w-4 h-4 border border-neutral-400 hover:ring-1 hover:ring-neutral-200 duration-150">
                            <input type="checkbox" on:change={checkBox} name="remember" id="remember" class="hidden">
                            <div id="checked-checkbox" class="w-[10px] h-[10px] bg-blue-400" style="display: none;"></div>
                        </label>
                        <label for="remember">Remember me</label>
                    </div>
                    <div>
                        <a class="text-blue-400 hover:text-blue-500 active:text-blue-600 visited:text-purple-600 duration-150" href="/users/recover">Forgot password</a>
                    </div>
                </div>
            </div>
            <div class="input-container">
                <p class="text-center">Don't have an account? <a  class="text-blue-400 hover:text-blue-500 active:text-blue-600 visited:text-purple-600 duration-150" href="/users/signup">Create one here</a></p>
            </div>
            <div class="input-container">
                <input type="submit" class="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500 active:bg-blue-600" value="Log in">
            </div>
        </section>
    </main>
</form>

<style lang="postcss">
    .input-container {
        @apply grid grid-flow-row gap-3 text-lg my-2;
    }

    .input-wrapper {
        @apply flex flex-row-reverse bg-neutral-800 border border-neutral-500 rounded;
    }

    .input-container input[type="text"], .input-container input[type="password"] {
        @apply flex-1 bg-transparent text-lg px-2 py-1;
    }
</style>
