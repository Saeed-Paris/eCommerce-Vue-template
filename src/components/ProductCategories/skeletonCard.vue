<script setup lang="ts"></script>
<template>
  <div class="card loading">
    <div class="image"></div>
    <div class="content">
      <h4></h4>
      <div class="description"></div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}

.image {
  height: 300px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 1rem 1.8rem;
}

h4 {
  margin: 0 0 1rem !important;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1rem;
}

.loading .image,
.loading h4,
.loading .description {
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.loading h4 {
  min-height: 0.8rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}

.loading .description {
  min-height: 0.8rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}
</style>
