<script lang="ts">
    let passwordVisible: boolean = false;

    function togglePasswordVisible(): void {
        passwordVisible = !passwordVisible;
    }
</script>
<svelte:head>
    <title>Log into your account | Whisper - Connect with the world beyond</title>
</svelte:head>
<main class="flex justify-center items-center w-screen h-screen px-4">
<div id="login-form-container" class="user-form-container">
        <h1 class="text-2xl text-center font-semibold mb-2">Log into your account</h1>
        <p class="text-center text-lg mb-4">Don't have an account? <a href="/users/signup" class="text-blue-400 hover:underline visited:text-purple-500">Create one</a></p>
        <form action="http://127.0.0.1:5262/api/users/signup" method="post" id="signup-form">
            <div class="input-container">
                <label for="user-email" class="input-label">Username or email</label>
                <input type="text" name="user-email" id="user-email" placeholder="The one you signed up with" class="form-input">
            </div>
            <div class="input-container">
                <label for="password" class="input-label">
                    Password
                    <button type="button" aria-label="Show password" class="px-1" on:click={togglePasswordVisible}>
                        <i class={"bi bi-eye-fill hover:text-blue-400 " + (passwordVisible ? "text-blue-500" : "text-neutral-500")}></i>
                    </button>
                </label>
                <input type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder="Type your password" class="form-input">
            </div>
            <div class="input-container">
                <input type="submit" value="Log in" class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded text-lg py-1 duration-150">
            </div>
        </form>
    </div>
</main>
