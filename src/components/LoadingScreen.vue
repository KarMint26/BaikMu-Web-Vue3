<template>
  <div
    class="loading-container w-screen h-screen flex justify-center items-center fixed z-[9999999999999] bg-white right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]"
  >
    <div class="custom-loader"></div>
  </div>
</template>

<style scoped>
.custom-loader {
  @apply w-[50px] h-[50px] sm:w-[60px] sm:h-[60px];
  display: grid;
  color:#13c6de;
  background: radial-gradient(farthest-side, currentColor calc(100% - 6px),#0000 calc(100% - 5px) 0);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 13px),#000 calc(100% - 12px));
  border-radius: 50%;
  animation: s9 2s infinite linear;
}
.custom-loader::before,
.custom-loader::after {    
  content:"";
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size: 100% 10px,10px 100%;
  background-repeat: no-repeat;
}
.custom-loader::after {
   transform: rotate(45deg);
}

@keyframes s9 { 
  100%{transform: rotate(1turn)}
}
</style>
