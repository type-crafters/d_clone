<script lang="ts">
    let month = 0;
    let year = 0;
    function range(start: number, end: number): number[] {
        let range = [];

        for (let i = end; i >= start; i--) {
            range.push(i);
        }

        return range;
    }

    function getSelectValue(id: string) {
        const select = document.getElementById(id) as HTMLSelectElement;
        return select.value;
    }

    function getDayCount(month: number, year: number) {
        if(month == 1) {
            return year%4==0? 29 : 28;
        } else {
            return [0, 2, 4, 6, 7, 9, 11].includes(month) ? 31 : 30;
        }
    } 

    function toMonth(int: number): string {
        const date = new Date();
        date.setMonth(int);

        return date.toLocaleString("default", { month: "long" });
    }
    function togglePassword(inputId: string, buttonId: string) {
        const inactive = ["text-gray-200", "hover:text-gray-300", "active:text-gray-400"];
        const active = ["text-blue-400", "hover:text-blue-500", "active:text-blue-600"];
        const show = document.getElementById(buttonId) as HTMLButtonElement;
        const input = document.getElementById(inputId) as HTMLInputElement;

        if (input.type == "password") {
            input.type = "text";
            show.classList.remove(...inactive);
            show.classList.add(...active);
        } else if (input.type == "text") {
            input.type = "password";
            show.classList.remove(...active);
            show.classList.add(...inactive);
        }
    }
</script>

<form id="login-form" method="post">
    <main id="form-page" class="container mx-auto h-screen grid place-items-center">
        <section
            id="form-container"
            class="sm:bg-neutral-700 lg:w-[600px] md:w-[480px] sm:w-[360px] w-full p-6 grid grid-flow-row gap-6 sm:shadow-md sm: shadow-black"
        >
            <h2 class="text-2xl text-center font-bold">Create an account</h2>
            <div class="input-container">
                <label for="name">Full name</label>
                <div class="flex w-full gap-4">
                    <div class="input-wrapper w-full">
                        <input class="w-full" type="text" name="fname" id="fname" placeholder="First name" />
                    </div>
                    <div class="input-wrapper w-full">
                        <input class="w-full" type="text" name="lname" id="lname" placeholder="Last name" />
                    </div>
                </div>
            </div>
            <div class="input-container">
                <label for="account">Email or phone number</label>
                <div class="input-wrapper">
                    <input type="text" name="account" id="account" placeholder="mail@example.com" />
                </div>
            </div>
            <div class="input-container">
                <label for="user">Username</label>
                <div class="input-wrapper">
                    <input type="text" name="user" id="user" placeholder="cool_slasher_16" />
                </div>
            </div>
            <div class="input-container">
                <label for="pass">Password</label>
                <div class="input-wrapper">
                    <button
                        type="button"
                        on:click={() => {
                            togglePassword("pass", "show-pass");
                        }}
                        id="show-pass"
                        class="px-2"
                    >
                        <i class="bi bi-eye-fill flex justify-center items-center text-xl duration-150"></i>
                    </button>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" />
                </div>
            </div>
            <div class="input-container">
                <label for="repeat-pass">Repeat Password</label>
                <div class="input-wrapper">
                    <button
                        type="button"
                        on:click={() => {
                            togglePassword("repeat-pass", "repeat-show-pass");
                        }}
                        id="show-repeat-pass"
                        class="px-2"
                    >
                        <i class="bi bi-eye-fill flex justify-center items-center text-xl duration-150"></i>
                    </button>
                    <input type="password" name="repeat-pass" id="repeat-pass" placeholder="Re-enter your password" />
                </div>
            </div>
            <div class="input-container">
                <label for="name">Date of Birth</label>
                <div class="flex w-full gap-4">
                    <div class="input-wrapper w-full">
                        <select class="w-full" name="month" id="month" on:change={()=>{month = parseInt(getSelectValue("month"));}}>
                            {#each range(0, 11) as month}
                                <option value={month}>{toMonth(month)}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="input-wrapper w-full">
                        <select class="w-full" name="day" id="day">
                            {#each range(1, getDayCount(month, year)) as day} 
                            <option value={day}>{day}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="input-wrapper w-full">
                        <select class="w-full" name="year" id="year" on:change={()=>{year = parseInt(getSelectValue("year"));}}>
                            {#each range(1900, new Date().getFullYear()) as year}
                                <option value={year}>{year}</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </div>
            <div class="input-container">
                <p class="text-center">
                    Already have an account? <a
                        class="text-blue-400 hover:text-blue-500 active:text-blue-600 visited:text-purple-600 duration-150"
                        href="/users/login">Log in</a
                    >
                </p>
            </div>
            <div class="input-container">
                <input
                    type="submit"
                    class="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500 active:bg-blue-600"
                    value="Create account"
                />
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

    .input-container input[type="text"],
    .input-container input[type="password"],
    .input-container select {
        @apply flex-1 bg-transparent text-lg px-2 py-1;
    }

    .input-container select option {
        @apply bg-neutral-800 border border-neutral-400;
    }
</style>
