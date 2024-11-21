<script>
import {router} from "tinro";

const goArticles = () => router.goto('/articles')
</script>
<!-- banner start -->
<div class="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10"
     style="background-image: url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2100');">

    <div class="container max-w-4xl mx-auto text-center">
        <h1 class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3">개발 노트</h1>
        <p class="text-md md:text-lg text-center text-white ">이것저것</p>

        <a href="/register" class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg">Find out
            more</a>
    </div>

</div>
<!-- /banner end -->

<!-- article area start -->
<div class="w-full px-6 py-12 bg-white">
    <div class="container max-w-4xl mx-auto text-center pb-10">

        <h3 class="text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-12">
            최근 게시물 목록
        </h3>

        <button class="bg-black text-white px-4 py-3 no-underline"
        on:click={goArticles}
        >포스팅 보기</button>

    </div>

    <div class="container max-w-4xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">
        <!-- article start -->
        <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800"
                 class="w-full h-64 object-cover mb-6"/>

            <h2 class="text-xl leading-tight mb-2">제목</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">
               내용</p>
        </div>

      <!--  <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800"
                 class="w-full h-64 object-cover mb-6"/>

            <h2 class="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit
                esse
                cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div class="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
                 class="w-full h-64 object-cover mb-6"/>

            <h2 class="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h2>
            <p class="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit
                esse
                cillum dolore eu fugiat nulla pariatur.</p>
        </div>-->
        <!-- /article end -->
    </div>
</div>
<!-- /article area end -->




