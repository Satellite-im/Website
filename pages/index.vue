<template>
  <div id="app">
    <main class="w-full h-screen bg-obsidian-shard overflow-hidden">
      <simplebar ref="simplebar" class="absolute w-full h-full">
        <div class="w-full px-40 overflow-hidden z-10">
          <nuxt-img
            src="/images/section-hero-spotlight.png"
            class="spotlight-hero"
            alt="spotlight"
            provider="netlify"
          />
          <header class="flex items-center w-full h-24">
            <div class="flex items-center w-full h-12">
              <nuxt-img
                src="/images/logo.png"
                :alt="$t('satellite_logo')"
                class="w-44 z-10"
                provider="netlify"
              />
              <nav class="relative w-full h-full px-16 text-white">
                <ul class="flex absolute bottom-0 mb-1.5">
                  <li
                    v-for="item in navItems"
                    :key="item.key"
                    class="
                      mx-8
                      first:ml-0
                      last:mr-0
                      text-sm text-center
                      align-middle
                    "
                  >
                    <button class="link-hover" @click="scroll(item.anchor)">
                      {{ item.label }}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div class="flex justify-between py-28">
            <div
              class="
                flex flex-col
                justify-center
                w-full
                max-w-[46.875rem]
                min-h-[38.75rem]
                2xl:pb-24
              "
            >
              <h1 class="text-6xl text-white">
                {{ $t('section_hero.title') }}
              </h1>
              <p class="mt-6 text-lg text-justify text-accolade">
                {{ $t('section_hero.description') }}
              </p>
              <div class="flex justify-between items-center flex-wrap mt-6">
                <StatStream class="w-16 mt-4 mr-4" />
                <StatChat class="w-44 mt-4 mr-4" />
                <StatFileShares class="w-24 mt-4 mr-4" />
              </div>
              <div class="flex items-center flex-wrap mt-12">
                <div class="relative w-44 h-12 mt-4 mr-6">
                  <nuxt-img
                    src="/images/shadow-button-green.png"
                    class="absolute w-96 transform -translate-y-3 scale-150"
                    alt="shadow"
                    provider="netlify"
                  />
                  <a
                    href="#"
                    class="
                      absolute
                      flex
                      justify-center
                      items-center
                      w-full
                      h-full
                      rounded-3xl
                      bg-cool-green
                      text-white
                      font-bold
                      text-center
                      transition
                      duration-300
                      ease-linear
                      outline-none
                      hover:bg-spandex-green
                      focus:bg-spandex-green
                    "
                  >
                    {{ $t('sign_up') }}
                  </a>
                </div>
                <a
                  href="#"
                  class="
                    flex
                    justify-center
                    items-center
                    w-52
                    h-12
                    mt-4
                    rounded-3xl
                    bg-white
                    text-retro-blue
                    font-bold
                    text-center
                    transition
                    duration-300
                    ease-linear
                    outline-none
                    shadow-lg
                    hover:bg-extraordinary-abundance-of-tinge
                    focus:bg-extraordinary-abundance-of-tinge
                  "
                >
                  {{ $t('open_in_browser') }}
                </a>
              </div>
            </div>
            <div class="relative w-[46.875rem] flex-shrink-0">
              <nuxt-img
                src="/images/section-hero-illustration.png"
                :alt="$t('app_illustration')"
                class="hero-illustration"
                provider="netlify"
              />
            </div>
          </div>
          <div class="w-full text-white">
            <h2 class="text-lg">
              {{ $t('our_partners').toUpperCase() }}
            </h2>
            <ul class="flex justify-center items-center flex-wrap w-full mt-4">
              <li
                v-for="partner in partners"
                :key="partner.key"
                class="flex justify-center w-1/4 my-10"
              >
                <a :href="partner.link" target="_blank" rel="noreferrer">
                  <nuxt-img
                    :src="partner.logo"
                    :class="`partner-${partner.key}`"
                    :alt="partner.key"
                    provider="netlify"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="divider"></div>
        <div
          class="
            w-full
            pt-40
            px-40
            bg-gradient-to-r
            from-white
            to-burj-khalifa-fountain
          "
        >
          <div class="w-full py-20">
            <h2 class="text-4xl text-center text-obsidian-shard">
              {{ $t('section_meet.title') }}
            </h2>
            <ul class="flex justify-center items-center flex-wrap w-full mt-4">
              <li
                v-for="slogan in slogans"
                :key="slogan.key"
                class="flex flex-col justify-center items-center w-1/4 my-10"
              >
                <div class="flex justify-center items-center w-48 h-48">
                  <nuxt-img
                    :src="`/images/section-meet-feature-${slogan.key}.png`"
                    class="w-full"
                    :alt="slogan.label"
                    provider="netlify"
                  />
                </div>
                <p class="text-xl font-medium text-obsidian-shard">
                  {{ slogan.label }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="about" class="relative w-full pt-10 z-10 overflow-hidden">
          <nuxt-img
            src="/images/section-slogan-spotlight.png"
            class="spotlight-slogan z-10"
            alt="spotlight"
            provider="netlify"
          />
          <h2 class="mt-20 text-4xl text-center text-white">
            {{ $t('section_slogan.title') }}
          </h2>
          <div class="relative w-[80.79rem] h-[60.09rem] m-auto z-10">
            <nuxt-img
              src="/images/section-slogan-illustration.png"
              class="
                w-full
                h-full
                transform
                -translate-x-20
                translate-y-5
                scale-95
              "
              :alt="$t('app_illustration')"
              provider="netlify"
            />
          </div>
          <div
            class="
              relative
              w-full
              bg-gradient-to-r
              from-white
              to-burj-khalifa-fountain
            "
          >
            <div
              class="
                bg-gradient-to-r
                from-white
                to-burj-khalifa-fountain
                divider-section-slogan
              "
            ></div>
            <div class="relative px-40 pb-20">
              <div class="flex relative w-full">
                <div class="flex justify-center items-center py-20">
                  <nuxt-img
                    src="/images/section-slogan-no-compromises.png"
                    class="
                      w-[43.75rem]
                      transform
                      -translate-x-2
                      translate-y-16
                      scale-110
                      z-10
                    "
                    :alt="$t('section_slogan.no_compromises.title')"
                    provider="netlify"
                  />
                </div>
                <div class="flex flex-col justify-center w-full py-20 pl-56">
                  <h3 class="text-4xl text-obsidian-shard">
                    {{ $t('section_slogan.no_compromises.title') }}
                  </h3>
                  <p class="mt-10 text-lg text-patriot-blue">
                    {{ $t('section_slogan.no_compromises.description.one') }}
                  </p>
                  <p class="mt-5 text-lg text-patriot-blue">
                    {{ $t('section_slogan.no_compromises.description.two') }}
                  </p>
                </div>
              </div>
              <div class="flex relative w-full">
                <div class="flex flex-col justify-center w-full py-20 pr-56">
                  <h3 class="text-4xl text-obsidian-shard">
                    {{ $t('section_slogan.multi_platform.title') }}
                  </h3>
                  <p class="mt-10 text-lg text-patriot-blue">
                    {{ $t('section_slogan.multi_platform.description') }}
                  </p>
                  <div class="relative w-44 h-12 mt-14 mr-6">
                    <nuxt-img
                      src="/images/shadow-button-green.png"
                      class="absolute w-96 transform -translate-y-3 scale-150"
                      alt="shadow"
                      provider="netlify"
                    />
                    <a
                      href="#"
                      class="
                        absolute
                        flex
                        justify-center
                        items-center
                        w-full
                        h-full
                        rounded-3xl
                        bg-cool-green
                        text-white
                        font-bold
                        text-center
                        transition
                        duration-300
                        ease-linear
                        outline-none
                        hover:bg-spandex-green
                        focus:bg-spandex-green
                      "
                    >
                      {{ $t('try_alpha') }}
                    </a>
                  </div>
                </div>
                <div class="flex justify-center items-center py-20">
                  <nuxt-img
                    src="/images/section-slogan-multi-platform.png"
                    class="
                      w-[43.75rem]
                      transform
                      -translate-x-10
                      translate-y-20
                      scale-110
                      z-10
                    "
                    :alt="$t('section_slogan.multi_platform.title')"
                    provider="netlify"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" class="relative w-full pt-20 z-10 overflow-hidden">
          <nuxt-img
            src="/images/section-features-spotlight.png"
            class="spotlight-features"
            alt="spotlight"
            provider="netlify"
          />
          <h2 class="mt-10 text-4xl text-center text-white">
            {{ $t('section_features.title') }}
          </h2>
          <div class="flex justify-center relative mt-20">
            <ul class="flex flex-col">
              <li
                v-for="feature in features"
                :key="feature.key"
                :class="`flex items-center w-full min-w-[28.125rem] max-w-[37.5rem] h-28 mt-5 pl-20 pr-5 rounded-lg ${
                  feature.isActive
                    ? 'bg-gradient-to-l from-white to-burj-khalifa-fountain'
                    : ''
                }`"
              >
                <div
                  :class="`relative before:absolute before:top-1/2 before:block before:w-4 before:h-4 before:rounded-full before:rounded-full before:transform before:-translate-x-12 before:-translate-y-1/2 ${
                    feature.isActive
                      ? 'before:bg-retro-blue'
                      : 'before:bg-white'
                  }`"
                >
                  <h3
                    :class="`text-xl ${
                      feature.isActive ? 'text-obsidian-shard' : 'text-white'
                    }`"
                  >
                    {{ feature.title }}
                  </h3>
                  <p
                    :class="`mt-2 text-lg ${
                      feature.isActive ? 'text-patriot-blue' : 'text-accolade'
                    }`"
                  >
                    {{ feature.description }}
                  </p>
                </div>
              </li>
            </ul>
            <div
              class="
                flex
                justify-center
                items-center
                w-[43.75rem]
                pl-20
                flex-shrink-0
              "
            >
              <nuxt-img
                src="images/section_features_illustration.png"
                :alt="$t('section_features.features.sharing.title')"
                class="transform translate-y-5"
                provider="netlify"
              />
            </div>
          </div>
          <div
            class="
              w-full
              mt-20
              pt-20
              px-40
              bg-gradient-to-r
              from-white
              to-burj-khalifa-fountain
            "
          >
            <div id="access" class="flex relative w-full">
              <div class="flex justify-center items-center py-20">
                <nuxt-img
                  src="/images/section_team_early_access.png"
                  class="
                    w-[43.75rem]
                    transform
                    -translate-x-2
                    translate-y-16
                    scale-125
                    z-10
                  "
                  :alt="$t('section_slogan.no_compromises.title')"
                  provider="netlify"
                />
              </div>
              <div class="flex flex-col justify-center w-full py-20 pl-56">
                <h3 class="text-4xl text-obsidian-shard">
                  {{ $t('section_early_access.title') }}
                </h3>
                <p class="mt-10 text-lg text-patriot-blue">
                  {{ $t('section_early_access.description.one') }}
                </p>
                <p class="mt-5 text-lg text-patriot-blue">
                  {{ $t('section_early_access.description.two') }}
                </p>
                <div class="flex items-center flex-wrap mt-12">
                  <div class="relative w-44 h-12 mt-4 mr-6">
                    <nuxt-img
                      src="/images/shadow-button-green.png"
                      class="absolute w-96 transform -translate-y-3 scale-150"
                      alt="shadow"
                      provider="netlify"
                    />
                    <a
                      href="#"
                      class="
                        absolute
                        flex
                        justify-center
                        items-center
                        w-full
                        h-full
                        rounded-3xl
                        bg-cool-green
                        text-white
                        font-bold
                        text-center
                        transition
                        duration-300
                        ease-linear
                        outline-none
                        hover:bg-spandex-green
                        focus:bg-spandex-green
                      "
                    >
                      {{ $t('sign_up') }}
                    </a>
                  </div>
                  <a
                    href="#"
                    class="
                      flex
                      justify-center
                      items-center
                      w-52
                      h-12
                      mt-4
                      rounded-3xl
                      bg-white
                      text-retro-blue
                      font-bold
                      text-center
                      transition
                      duration-300
                      ease-linear
                      outline-none
                      shadow-lg
                      hover:bg-extraordinary-abundance-of-tinge
                      focus:bg-extraordinary-abundance-of-tinge
                    "
                  >
                    {{ $t('try_release') }}
                  </a>
                </div>
              </div>
            </div>
            <div id="team" class="max-w-[45%] mt-20 py-20">
              <div class="w-full">
                <h3 class="text-4xl text-obsidian-shard">
                  {{ $t('section_team.title') }}
                </h3>
                <p class="mt-10 text-lg text-patriot-blue">
                  {{ $t('section_team.description') }}
                </p>
                <a
                  href="https://github.com/Satellite-im"
                  target="_blank"
                  rel="noreferrer"
                  class="
                    flex
                    justify-center
                    items-center
                    w-44
                    h-12
                    mt-14
                    rounded-3xl
                    bg-white
                    text-retro-blue
                    font-bold
                    text-center
                    transition
                    duration-300
                    ease-linear
                    outline-none
                    shadow-lg
                    hover:bg-extraordinary-abundance-of-tinge
                    focus:bg-extraordinary-abundance-of-tinge
                  "
                >
                  {{ $t('github') }}
                </a>
              </div>
            </div>
            <div class="relative">
              <div v-if="swiper" class="flex absolute right-0">
                <nuxt-img
                  src="/images/section-team-shape.svg"
                  class="absolute section-team-shape"
                  alt="shape"
                  provider="netlify"
                />
                <button
                  :class="`
                    flex
                    justify-center
                    items-center
                    w-20
                    h-20
                    mr-5
                    rounded-full
                    bg-white
                    transition
                    duration-300
                    ease-linear
                    outline-none
                    ${
                      swiper.activeIndex !== 0
                        ? 'hover:bg-extraordinary-abundance-of-tinge'
                        : ''
                    }
                    ${
                      swiper.activeIndex !== 0
                        ? 'focus:bg-extraordinary-abundance-of-tinge'
                        : ''
                    }
                    shadow-sm
                    transform
                    -translate-y-48`"
                  @click="prev"
                >
                  <Arrow
                    :class="`w-9 h-9 stroke-current text-accolade  ${
                      swiper.activeIndex !== 0 ? 'text-retro-blue' : ''
                    }`"
                  />
                </button>
                <button
                  :class="`
                    flex
                    justify-center
                    items-center
                    w-20
                    h-20
                    mr-5
                    rounded-full
                    bg-white
                    transition
                    duration-300
                    ease-linear
                    outline-none
                    ${
                      swiper.activeIndex !== team.length - slidesPerView
                        ? 'hover:bg-extraordinary-abundance-of-tinge'
                        : ''
                    }
                    ${
                      swiper.activeIndex !== team.length - slidesPerView
                        ? 'focus:bg-extraordinary-abundance-of-tinge'
                        : ''
                    }
                    shadow-sm
                    transform
                    -translate-y-48`"
                  @click="next"
                >
                  <Arrow
                    :class="`w-9 h-9 stroke-current text-accolade rotate-180 ${
                      swiper.activeIndex !== team.length - slidesPerView
                        ? 'text-retro-blue'
                        : ''
                    }`"
                  />
                </button>
              </div>
              <div ref="swiper" class="swiper mt-40">
                <div class="swiper-wrapper">
                  <div
                    v-for="teamMember in team"
                    :key="teamMember.key"
                    class="swiper-slide"
                  >
                    <div
                      class="flex flex-col justify-center items-center w-full"
                    >
                      <nuxt-img
                        :src="teamMember.image"
                        class="w-64 h-64"
                        :alt="teamMember.name"
                        provider="netlify"
                      />
                      <h2
                        class="
                          text-xl
                          font-medium
                          text-center text-obsidian-shard
                        "
                      >
                        {{ teamMember.name }}
                      </h2>
                      <p class="mt-2 text-lg text-center text-patriot-blue">
                        {{ teamMember.occupation }}
                      </p>
                      <ul class="flex justify-center items-center">
                        <li
                          v-for="social in teamMember.socials"
                          :key="social.key"
                          class="mx-2"
                        >
                          <a
                            :href="social.link"
                            target="_blank"
                            rel="noreferrer"
                            class="p-4"
                          >
                            <Github
                              v-if="social.key === 'github'"
                              class="
                                w-10
                                h-10
                                fill-current
                                text-obsidian-shard
                              "
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative w-full h-[10rem] mt-56">
              <div class="divider-footer">
                <nuxt-img
                  src="/images/footer-spotlight.png"
                  class="scale-75 transform -translate-y-16"
                  alt="spotlight"
                  provider="netlify"
                />
              </div>
            </div>
          </div>
        </div>
        <footer class="relative pb-40 px-72">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <nuxt-img
                src="/images/logo.png"
                :alt="$t('satellite_logo')"
                class="w-60 z-10"
                provider="netlify"
              />
              <nav class="ml-20 transform translate-y-3">
                <ul class="flex items-center">
                  <li class="mr-14">
                    <a href="#" class="text-sm text-white link-hover">{{
                      $t('footer.nav.app')
                    }}</a>
                  </li>
                  <li class="mr-14">
                    <a href="#" class="text-sm text-white link-hover">{{
                      $t('footer.nav.careers')
                    }}</a>
                  </li>
                  <li class="mr-14">
                    <a href="#" class="text-sm text-white link-hover">{{
                      $t('footer.nav.contact_us')
                    }}</a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul class="flex items-center">
              <li class="flex justify-center items-center w-10 mr-5 social">
                <a
                  href="https://twitter.com/satellite_im"
                  target="_blank"
                  rel="noreferrer"
                  class="flex justify-center items-center w-full"
                >
                  <Twitter class="w-7 h-7" />
                </a>
              </li>
              <li class="flex justify-center items-center w-10 mr-5 social">
                <a
                  href="https://www.linkedin.com/company/satellite-im"
                  target="_blank"
                  rel="noreferrer"
                  class="flex justify-center items-center w-full"
                  ><Linkedin class="w-6 h-6"
                /></a>
              </li>
              <li class="flex justify-center items-center w-10 mr-5 social">
                <a
                  href="https://github.com/Satellite-im"
                  target="_blank"
                  rel="noreferrer"
                  class="flex justify-center items-center w-full"
                  ><Github class="w-6 h-6 fill-current text-accolade"
                /></a>
              </li>
            </ul>
          </div>
          <p class="mt-10 text-sm text-accolade">
            {{ $t('footer.copyright') }}
          </p>
        </footer>
      </simplebar>
    </main>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'
import Swiper from 'swiper/swiper-bundle'

import StatStream from '~/static/icons/stat-stream.svg?inline'
import StatChat from '~/static/icons/stat-chat.svg?inline'
import StatFileShares from '~/static/icons/stat-file-shares.svg?inline'
import Twitter from '~/static/icons/twitter.svg?inline'
import Linkedin from '~/static/icons/linkedin.svg?inline'
import Github from '~/static/icons/github.svg?inline'
import Arrow from '~/static/icons/arrow.svg?inline'

import 'simplebar/dist/simplebar.min.css'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    simplebar,
    StatChat,
    StatStream,
    StatFileShares,
    Twitter,
    Linkedin,
    Github,
    Arrow,
  },
  data() {
    return {
      navItems: [
        {
          key: 'about',
          label: this.$t('section_hero.nav_items.about'),
          anchor: '#about',
        },
        {
          key: 'features',
          label: this.$t('section_hero.nav_items.features'),
          anchor: '#features',
        },
        {
          key: 'access',
          label: this.$t('section_hero.nav_items.access'),
          anchor: '#access',
        },
        {
          key: 'team',
          label: this.$t('section_hero.nav_items.team'),
          anchor: '#team',
        },
      ],
      partners: [
        {
          key: 'multicoin-capital',
          logo: '/images/partner-multicoin-capital.svg',
          link: 'https://multicoin.capital/',
        },
        {
          key: 'ideo-colab',
          logo: '/images/partner-ideo-colab.svg',
          link: 'https://www.ideocolab.com/',
        },
        { key: 'framework', logo: '/images/partner-framework.svg', link: '' },
        {
          key: 'solana',
          logo: '/images/partner-solana.svg',
          link: 'https://solana.com/',
        },
        {
          key: 'textile',
          logo: '/images/partner-textile.svg',
          link: 'https://www.textile.io/',
        },
        {
          key: 'jacket-river',
          logo: '/images/partner-jacket-river.svg',
          link: 'https://www.jacketriver.com/',
        },
        {
          key: 'knobs',
          logo: '/images/partner-knobs.svg',
          link: 'https://knobs.it/en/knobs-en/',
        },
      ],
      slogans: [
        {
          key: 'chat',
          label: this.$t('section_meet.features.chat'),
        },
        {
          key: 'encryption',
          label: this.$t('section_meet.features.encryption'),
        },
        {
          key: 'cross-platform',
          label: this.$t('section_meet.features.cross_platform'),
        },
        {
          key: 'payments',
          label: this.$t('section_meet.features.chat'),
        },
      ],
      features: [
        {
          key: 'installation',
          title: this.$t('section_features.features.installation.title'),
          description: this.$t(
            'section_features.features.installation.description'
          ),
        },
        {
          key: 'chat',
          title: this.$t('section_features.features.chat.title'),
          description: this.$t('section_features.features.chat.description'),
        },
        {
          key: 'sharing',
          title: this.$t('section_features.features.sharing.title'),
          description: this.$t('section_features.features.sharing.description'),
          isActive: true,
        },
        {
          key: 'payments',
          title: this.$t('section_features.features.payments.title'),
          description: this.$t(
            'section_features.features.payments.description'
          ),
        },
        {
          key: 'streaming',
          title: this.$t('section_features.features.streaming.title'),
          description: this.$t(
            'section_features.features.streaming.description'
          ),
        },
        {
          key: 'serverless',
          title: this.$t('section_features.features.serverless.title'),
          description: this.$t(
            'section_features.features.serverless.description'
          ),
        },
      ],
      team: [
        {
          key: 'matt',
          image: '/images/team_matt.png',
          name: 'Matt Wisniewski',
          occupation: this.$t('section_team.team.matt_occupation'),
          socials: [
            {
              key: 'github',
              link: 'https://github.com/RetroPronghorn',
            },
          ],
        },
        {
          key: 'manuel',
          image: '/images/team_manuel.png',
          name: 'Manuel Tumiati',
          occupation: this.$t('section_team.team.manuel_occupation'),
          socials: [{ key: 'github', link: 'https://github.com/iltumio' }],
        },
        {
          key: 'kathy',
          image: '/images/team_kathy.png',
          name: 'Kathy Chan',
          occupation: this.$t('section_team.team.kathy_occupation'),
          socials: [{ key: 'github', link: 'https://github.com/KemoPaw' }],
        },
        {
          key: 'lauren',
          image: '/images/team_lauren.png',
          name: 'Lauren Harrington',
          occupation: this.$t('section_team.team.lauren_occupation'),
          socials: [{ key: 'github', link: '' }],
        },
        {
          key: 'jason',
          image: '/images/team_jason.png',
          name: 'Jason Panay',
          occupation: this.$t('section_team.team.jason_occupation'),
          socials: [{ key: 'github', link: 'https://github.com/jpanay' }],
        },
        {
          key: 'chris',
          image: '/images/team_chris.png',
          name: 'Chris',
          occupation: this.$t('section_team.team.chris_occupation'),
          socials: [
            {
              key: 'github',
              link: 'https://github.com/wanderinghogan',
            },
          ],
        },
        {
          key: 'dina',
          image: '/images/team_dina.png',
          name: 'Dina',
          occupation: this.$t('section_team.team.dina_occupation'),
          socials: [{ key: 'github', link: '' }],
        },
        {
          key: 'tom',
          image: '/images/team_tom.png',
          name: 'Tom',
          occupation: this.$t('section_team.team.tom_occupation'),
          socials: [{ key: 'github', link: '' }],
        },
        {
          key: 'jerome',
          image: '/images/team_jerome.png',
          name: 'Jerome',
          occupation: this.$t('section_team.team.jerome_occupation'),
          socials: [{ key: 'github', link: '' }],
        },
      ],
      simplebar: null,
      swiper: null,
      slidesPerView: 4,
    }
  },
  mounted() {
    const vm = this

    this.simplebar = vm.$refs.simplebar.scrollElement

    this.swiper = new Swiper(vm.$refs.swiper, {
      slidesPerView: this.slidesPerView,
      allowTouchMove: false,
    })
  },
  methods: {
    prev() {
      if (this.swiper.activeIndex !== 0) {
        this.swiper.slidePrev()
      }
    },
    next() {
      if (this.swiper.activeIndex !== this.team.length - this.slidesPerView) {
        this.swiper.slideNext()
      }
    },
    scroll(anchorId) {
      const anchor = document.querySelector(anchorId)

      if (anchor) {
        this.simplebar.scrollTo({
          top: anchor.getBoundingClientRect().top,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>
