<script>
    import {router} from "tinro";

    const goArticles = () => router.goto('/articles')
</script>
<!-- navigation -->
<nav class="w-full bg-white md:pt-0 px-6 shadow-lg relative z-20 border-t border-b border-gray-400">
    <div class="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
        <div class="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
            <a href="/" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400">Home</a>
            <button class="px-2 md:pl-0 md:mr-3 md:pr-3
            text-gray-700 no-underline md:border-r border-gray-400"
            on:click={goArticles}
            >Post</button>
            <button class="px-2 md:pl-0 md:mr-3 md:pr-3
            text-gray-700 no-underline md:border-r border-gray-400"
            >Food</button>
            <a href="/#" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline">Contact</a>
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right pb-4 md:p-0">
            <input type="search" placeholder="Search..." class="bg-gray-300 border text-sm p-1" />
        </div>
    </div>
</nav>
<!-- /navigation -->