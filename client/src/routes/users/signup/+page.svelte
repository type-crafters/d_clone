<script lang="ts">
    import Alert from "$lib/Alert.svelte";

    let passwordVisible: boolean = false;
    let confirmPasswordVisible: boolean = false;
    let newsletterOptIn: boolean = false;

    function togglePasswordVisible(): void {
        passwordVisible = !passwordVisible;
    }

    function toggleConfirmPasswordVisible(): void {
        confirmPasswordVisible = !confirmPasswordVisible;
    }

    function toggleNewsletterOptIn(event: Event): void {
        const checkbox = event.currentTarget as HTMLInputElement;
        newsletterOptIn = checkbox.checked;
    }
</script>
<svelte:head>
    <title>Create an account | Whisper - Connect with the world beyond</title>
</svelte:head>
<main class="flex justify-center items-center w-screen h-screen px-4">
    <div id="signup-form-container" class="user-form-container">
        <h1 class="text-2xl text-center font-semibold mb-2">Create an account</h1>
        <p class="text-center text-lg mb-4">Already have an account? <a href="/users/login" class="text-blue-400 hover:underline visited:text-purple-500">Log in</a></p>
        <form action="http://127.0.0.1:5262/api/users/signup" method="post" id="signup-form">
            <div class="input-container">
                <label for="Email" class="input-label">Email</label>
                <input type="email" name="Email" id="Email" placeholder="someone@example.com" class="form-input">
            </div>
            <div class="input-container">
                <label for="UserName" class="input-label">Username</label>
                <input type="text" name="UserName" id="UserName" placeholder="sneaky_capybara_100" class="form-input">
            </div>
            <div class="input-container">
                <label for="Password" class="input-label">
                    Password
                    <button type="button" aria-label="Show password" class="px-1" on:click={togglePasswordVisible}>
                        <i class={"bi bi-eye-fill hover:text-blue-400 " + (passwordVisible ? "text-blue-500" : "text-neutral-500")}></i>
                    </button>
                </label>
                <input type={passwordVisible ? "text" : "password"} name="Password" id="Password" placeholder="Create a password" class="form-input">
            </div>
            <div class="input-container">
                <label for="ConfirmPassword" class="input-label">
                    Confirm password
                    <button type="button" aria-label="Show confirm password" class="px-1" on:click={toggleConfirmPasswordVisible}>
                        <i class={"bi bi-eye-fill hover:text-blue-400 " + (confirmPasswordVisible ? "text-blue-500" : "text-neutral-500")}></i>
                    </button>
                </label>
                <input type={confirmPasswordVisible ? "text" : "password"} name="ConfirmPassword" id="ConfirmPassword" placeholder="Type your password again" class="form-input">
            </div>
            <div class="input-container">
                <div class="flex items-center gap-4">
                    <label for="NewsletterOptIn" class="w-4 aspect-square h-4 border border-neutral-400 flex justify-center items-center hover:outline hover:outline-1 hover:outline-blue-400 duration-150">
                        <i class={"bi bi-check text-lg flex justify-center items-center text-blue-500 duration-150 " + (newsletterOptIn ? "scale-100" : "scale-0")}></i>
                        <input type="checkbox" name="NewsletterOptIn" id="NewsletterOptIn" class="hidden" on:input={toggleNewsletterOptIn}>
                    </label>
                    <label for="NewsletterOptIn">Sign me up for Whisper's newsletter</label>
                </div>
            </div>
            <div class="input-container">
                <input type="submit" value="Sign up" class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded text-lg py-1 duration-150">
            </div>
        </form>
    </div>
</main>