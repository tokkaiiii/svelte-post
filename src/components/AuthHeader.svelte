<script>
    import {router} from "tinro";

    const goHome = () => router.goto('/')
</script>
<!-- header -->
<header class="w-full px-6 bg-white">
    <div class="container mx-auto max-w-4xl md:flex justify-between items-center">
        <button class="block py-6 w-full text-center md:text-left md:w-auto text-gray-600 no-underline justify-center items-center"
                on:click={goHome}
        >
            Tokkaiiii
        </button>
        <div class="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
            <button class="inline-block no-underline bg-black text-white text-sm py-2 px-3" on:click={goHome} >Home</button>
        </div>
    </div>
</header>
<!-- /header -->