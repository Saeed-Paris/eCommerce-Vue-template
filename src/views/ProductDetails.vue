<script setup lang="ts">
import ProdcutPrice from '@/components/ProductDetails/ProdcutPrice.vue';
import ProductAddToCard from '@/components/ProductDetails/ProductAddToCard.vue';
import ProductGallery from '@/components/ProductDetails/ProductGallery.vue';
import ProductQuantity from '@/components/ProductDetails/ProductQuantity.vue';
import ProductRating from '@/components/ProductDetails/ProductRating.vue';
import ProductTitle from '@/components/ProductDetails/ProductTitle.vue';
import ProductVarieties from '@/components/ProductDetails/ProductVarieties.vue';


</script>

<template>
	<section>
		<!-- <ProductGallery />
		<div>
			<ProductTitle />
			<div>
				<ProdcutPrice />
				<ProductRating />
			</div>
			<ProductVarieties />
			<ProductQuantity />
			<ProductAddToCard />
		</div> -->
		<div>
			<div>
				<h2 class="text-bold text-xl">شلوار کد 1109</h2>
			</div>
			<div>
				<span>229000</span>
				<span>تومان</span>
			</div>
			<div>
				<p>انتخاب سایز</p>
				<div>
					<div>
						<div>X</div>
						<div>XL</div>
						<div>S</div>
						<div>M</div>
					</div>
					<button>سایز من چنده؟</button>
				</div>
			</div>
			<div>
				تعداد
			</div>
			<button>افزودن به سبد خرید</button>
		</div>
	</section>

</template>

<style scoped>

</style>