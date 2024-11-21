<script>
    import {router, meta} from "tinro";

    const route = meta()
    const url = $route.url
    const goLogin = () => router.goto('/login')
    const goRegister = () => router.goto('/register')
</script>
<!-- navigation -->
<nav class="w-full bg-white md:pt-0 px-6 shadow-lg relative z-20 border-t border-b border-gray-400">
    <div class="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
        <div class="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
            <button class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
                    class:font-bold={url==='/login'}
                    on:click={goLogin}>로그인</button>
            <button class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline"
                    class:font-bold={url==='/register'}
                    on:click={goRegister}>회원가입</button>
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right pb-4 md:p-0">
            <input type="search" placeholder="Search..." class="bg-gray-300 border text-sm p-1" />
        </div>
    </div>
</nav>
<!-- /navigation -->