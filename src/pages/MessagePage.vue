<template>
  <div id="SingleMessageSection" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-1.5 py-0.5">
        <div class="flex">
          <router-link to="/email">
            <base-icon
              iconString="back"
              :iconSize="19"
              iconColor="#636363"
              text="Back to inbox"
              hoverColor="hover:bg-gray-100"
            />
          </router-link>

          <base-icon
            iconString="trash"
            :iconSize="19"
            iconColor="#636363"
            text="Delete"
            hoverColor="hover:bg-gray-100"
            class="ml-3"
          />
        </div>
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>

    <div class="w-full text-xl ml-20 font-light pt-5">Subject</div>

    <div class="w-full flex">
      <img class="rounded-full mt-8 mx-5 w-10 h-10" src="https://via.placeholder.com/45" />
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <div>bebra@gmail.com</div>
            <div class="mr-5 text-xs font-normal">12.01.21</div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis necessitatibus odit dolor
          nulla nisi. Voluptatibus dolor vero, impedit unde libero blanditiis quibusdam, ipsa in
          odio corrupti quam facilis eligendi itaque? Dicta esse, et, magni ex praesentium autem
          nisi maxime recusandae minus earum, obcaecati veritatis. Dolores sequi iste quae dolor
          eaque delectus quibusdam libero incidunt quaerat. Accusamus dolorem tenetur facere veniam!
          Consequatur similique aliquam voluptatum temporibus molestias dolores inventore quis at
          quo et autem ipsa vero, neque numquam in magni alias accusantium quibusdam maxime
          praesentium debitis id illum amet. Dolore, voluptatem! Repellendus, aut placeat recusandae
          ullam sequi quibusdam. Modi, sapiente recusandae? Ullam tenetur blanditiis possimus
          reiciendis distinctio corrupti laboriosam id sequi accusantium deleniti? Cumque
          necessitatibus perferendis, sapiente expedita nesciunt ratione harum! Dolorem labore non
          id ratione aliquam eum laborum! Corrupti recusandae obcaecati maiores consequatur, earum
          pariatur ea quo accusamus repellat dolorem deserunt iusto quis incidunt laboriosam, id
          nesciunt voluptatum ratione cumque! Accusamus, eius expedita quis iste sit eos itaque
          doloremque reprehenderit suscipit! Asperiores consectetur sunt veniam vel itaque. Officiis
          eligendi est veritatis similique neque quia voluptatibus ipsum! Dolore eum voluptatem
          dolorum? Deleniti autem consectetur maiores? Voluptatum iste praesentium atque accusamus,
          cumque, animi quod esse aut repellat delectus quidem architecto natus. Esse, quia totam.
          Repellendus eius, nemo tempora quia reprehenderit quaerat ipsa! At commodi itaque dolorum,
          tempore, sit amet neque modi ipsum voluptatem aliquid vitae. Distinctio nesciunt sunt
          perspiciatis, eius, sit velit labore eligendi sequi ullam fugiat dolores rerum, officia
          explicabo quidem. Quidem enim corporis ullam ex nihil magni cupiditate placeat, provident
          illum. Sint fugiat ea quam, vero quia sequi quos nihil mollitia ipsa at ab. Officiis natus
          in illum repudiandae soluta. Iure corrupti odio ipsum quo. Ipsa quidem, excepturi ad
          veritatis illum quod omnis eius, nisi ratione magnam placeat fuga eos eveniet autem cumque
          nemo facilis corrupti, ut ullam beatae. Asperiores!
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { type IEmail } from '@/shared/types/email'

const route = useRoute()
const router = useRouter()

const email = ref<IEmail>({})
</script>

<style lang="scss" scoped></style>
