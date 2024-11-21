<script>
    import {onMount} from "svelte";

    onMount(() => {
        // 컴포넌트가 마운트된 후에 포커스를 설정
        document.getElementById('email')?.focus();
    });
</script>
<div class="bg-gray-100">


    <div class="min-h-screen w-full p-6 flex justify-center items-center">

        <div class="w-full max-w-xs">

            <div class="bg-white border p-8 shadow rounded w-full mb-6">

                <h1 class="mb-6 text-lg text-gray-900 font-thin">회원가입</h1>

                <form method="POST" action="/login">

                    <fieldset class="mb-4">
                        <label for="email" class="block text-sm text-gray-900 mb-2">이메일</label>
                        <input id="email"
                               type="email"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="email"
                               required
                               >
                    </fieldset>

                    <fieldset class="mb-4">
                        <div class="w-full flex justify-between items-center">
                            <label for="password" class="block text-sm text-gray-900 mb-2">비밀번호</label>
                        </div>
                        <input id="password"
                               type="password"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="password"
                               required>
                    </fieldset>
                    <fieldset class="mb-4">
                        <div class="w-full flex justify-between items-center">
                            <label for="password-confirm" class="block text-sm text-gray-900 mb-2">비밀번호 확인</label>
                        </div>
                        <input id="password-confirm"
                               type="password"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="password-confirm"
                               required>
                    </fieldset>
                    <fieldset class="mb-4">
                        <div class="w-full flex justify-between items-center">
                            <label for="username" class="block text-sm text-gray-900 mb-2">유저명</label>
                        </div>
                        <input id="username"
                               type="text"
                               class="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                               name="username"
                               required>
                    </fieldset>

                    <!-- <div class="pt-1 pb-5 text-sm text-gray-darker font-thin">
                         <label><input class="mr-1" type="checkbox" name="remember" id="remember"> Remember me</label>
                     </div>-->


                    <button type="submit" class="block w-full bg-blue-700 text-white rounded-sm py-3 text-sm tracking-wide">
                        회원가입
                    </button>
                </form>
            </div>
        </div>

    </div>


</div>
