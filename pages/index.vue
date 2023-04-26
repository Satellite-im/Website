<template>
  <div id="app">
    <main class="w-full h-screen overflow-hidden bg-obsidian-shard">
      <simplebar ref="simplebar" class="absolute w-full h-full">
        <div class="z-10 w-full overflow-hidden">
          <nuxt-img src="/images/page-start-spotlight.webp" class="
              absolute
              transform
              translate-y-[-35%] translate-x-[-35%]
              pointer-events-none
            " alt="spotlight" provider="netlify" />
          <header class="flex items-center w-full h-24 px-10 md:px-20 lg:px-40">
            <nuxt-img src="/images/logo.webp" :alt="$t('satellite_logo')" class="flex md:order-1 w-[11.98rem] z-10 pr-25"
              provider="netlify" />
            <div class="flex md:order-3 items-center w-full h-12 justify-end">
              <nav v-if="$viewport.isGreaterThan('md')" class="relative w-full h-full px-16 text-white">
                <ul class="absolute bottom-0 flex mb-2 right">
                  <li v-for="item in navItems" :key="item.key" class="mx-8 text-center align-middle first:ml-0 last:mr-0">
                    <a class="link-hover" :href="item.link" target="_blank">
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <div class="flex justify-between px-10 py-14 md:py-28 md:px-20 md:pl-20 lg:pr-0 lg:p-40">
            <div class="
                flex flex-col
                justify-center
                w-full
                lg:w-[32.1875rem]
                flex-shrink-0
                xl:flex-shrink xl:max-w-2xl
                2xl:pr-4
              ">
              <nuxt-img v-if="$viewport.isLessThan('lg')" src="/images/uplink-screen.png" :alt="$t('app_illustration')" class="
                  max-w-full
                  h-auto
                  rounded-lg
                  mobile-image
                " provider="netlify" />
              <h1 class="text-3xl text-white md:text-4xl">
                {{ $t('section_hero.title') }}
              </h1>
              <p class="mt-6 text-justify md:text-lg text-accolade">
                {{ $t('section_hero.description') }}
              </p>
              <div class="flex flex-wrap items-center justify-between">
              </div>
              <div class="flex items-center mt-12">

                <div class="relative ">
                  <a href="https://satelliteim.eo.page/signup" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-36 md:w-56 h-10 mt-4 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-56 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge">
                    {{ $t('sign_up') }}
                  </a>
                </div>
              </div>
            </div>
            <div class="
                relative
                w-[53.75rem]
                flex-shrink-0
                p-10
                m-auto
                shadow-lg shadow-blue-500/50
              ">
              <nuxt-img v-if="$viewport.isGreaterThan('lg')" src="/images/uplink-screen.png" :alt="$t('app_illustration')" class="
                  max-w-full
                  h-auto
                  rounded-lg
                " provider="netlify" />
            </div>
          </div>


          <!-- START UPLINK SECTION -->
          <div v-if="$viewport.isGreaterThan('lg')" class="flex justify-between px-10 py-14 md:py-28 md:px-20 md:pl-20 lg:pr-0 lg:p-40">
            <div class="
                flex flex-col
                justify-center
                w-full
                lg:w-[32.1875rem]
                flex-shrink-0
                xl:flex-shrink xl:max-w-2xl
                2xl:pr-4
              ">
              <nuxt-img src="/images/uplink-logo.png" :alt="$t('app_illustration')"
                class="
                  max-w-full
                  h-auto
                  rounded-lg
                " provider="netlify" />

            </div>
            <div class="
                relative
                w-[43.75rem]
                flex-shrink-0
                p-10
                m-auto
                shadow-lg shadow-blue-500/50
              ">
              <nuxt-img v-if="$viewport.isLessThan('lg')" src="/images/uplink-logo.png" :alt="$t('app_illustration')"
                class="
                  max-w-full
                  h-auto
                  rounded-lg
                  mobile-image
                " provider="netlify" />
              <h1 class="text-3xl text-white md:text-4xl">
                {{ $t('uplink_section.title') }}
              </h1>
              <p class="mt-6 text-justify md:text-lg text-accolade">
                {{ $t('uplink_section.description') }}
              </p>
              <div class="flex flex-wrap items-center justify-between">
              </div>
              <div class="flex items-center mt-12">

                <div class="relative ">
                  <a href="https://uplink.satellite.im" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-36 md:w-56 h-10 mt-4 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-56 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge">
                    {{ $t('uplink_section.call_to_action') }}
                  </a>
                </div>
              </div>
            </div>
          </div>

         <!-- UPLINK MOBILE -->
         <div v-if="$viewport.isLessThan('lg')" class="flex justify-between px-10 py-14 md:py-28 md:px-20 md:pl-20 lg:pr-0 lg:p-40">
            <div class="
                flex flex-col
                justify-center
                w-full
                lg:w-[32.1875rem]
                flex-shrink-0
                xl:flex-shrink xl:max-w-2xl
                2xl:pr-4
              ">
              <nuxt-img src="/images/uplink-logo.png"
                :alt="$t('app_illustration')" class="
                  max-w-full
                  h-auto
                  rounded-lg
                " provider="netlify" />
              <h1 class="text-3xl text-white md:text-4xl">
                {{ $t('uplink_section.title') }}
              </h1>
              <p class="mt-6 text-justify md:text-lg text-accolade">
                {{ $t('uplink_section.description') }}
              </p>
              <div class="flex flex-wrap items-center justify-between">
              </div>
              <div class="flex items-center mt-12">

                <div class="relative ">
                  <a href="https://uplink.satellite.im" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-36 md:w-56 h-10 mt-4 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-56 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge">
                    {{ $t('uplink_section.call_to_action') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- End Uplink Section -->

          <!-- START Warp SECTION -->
          <div class="flex justify-between px-10 py-14 md:py-28 md:px-20 md:pl-20 lg:pr-0 lg:p-40">
            <div class="
                flex flex-col
                justify-center
                w-full
                lg:w-[32.1875rem]
                flex-shrink-0
                xl:flex-shrink xl:max-w-2xl
                2xl:pr-4
              ">
              <nuxt-img v-if="$viewport.isLessThan('lg')" src="/images/warp-screenshot.png"
                :alt="$t('app_illustration')" class="
                  max-w-full
                  h-auto
                  rounded-lg
                " provider="netlify" />
              <h1 class="text-3xl text-white md:text-4xl">
                {{ $t('warp_section.title') }}
              </h1>
              <p class="mt-6 text-justify md:text-lg text-accolade">
                {{ $t('warp_section.description') }}
              </p>
              <div class="flex flex-wrap items-center justify-between">
              </div>
              <div class="flex items-center mt-12">

                <div class="relative ">
                  <a href="https://warp.satellite.im" target="_blank" rel="noopener noreferrer"
                    class="flex items-center justify-center w-36 md:w-56 h-10 mt-4 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-56 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge">
                    {{ $t('warp_section.call_to_action') }}
                  </a>
                </div>
              </div>
            </div>
            <div v-if="$viewport.isGreaterThan('lg')" class="
                relative
                w-[43.75rem]
                flex-shrink-0
                p-10
                m-auto
                shadow-lg shadow-blue-500/50
              ">
              <nuxt-img src="/images/warp-screenshot.png"
                :alt="$t('app_illustration')" class="
                  max-w-full
                  h-auto
                  rounded-lg
                " provider="netlify" />
            </div>
          </div>

          <!-- End Warp Section -->


          <div id="partners" class="w-full px-10 mt-20 text-white 2xl:mt-40 md:px-20 lg:px-40">
            <ul class="flex flex-wrap items-center justify-center w-full mt-4">
              <li v-for="partner in partners" :key="partner.key"
                class="flex justify-center w-1/2 my-5  sm:w-1/3 lg:w-1/4 md:my-10">
                <a :href="partner.link" target="_blank" rel="noopener noreferrer"
                  :class="`flex-shrink-0 cursor-pointer partner-${partner.key}-link`">
                  <component :is="partner.icon" :class="`partner-${partner.key}-img`">
                  </component>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="
            absolute
            left-1/2
            h-40
            transform
            -translate-x-1/2 -translate-y-8
            sm:translate-y-[-1px]
            bg-obsidian-shard
            divider
          "></div>

        <footer
          class="relative z-10 px-10 transform -translate-y-20  pb-36 md:px-20 lg:px-40 2xl:px-72 xl:-translate-y-10">
          <div class="relative flex flex-wrap items-end w-full">
            <nav class="w-full mt-5 mr-auto xl:w-auto">
              <ul class="flex flex-wrap items-center">
                <li class="w-full mt-5 xs:w-auto xs:mr-14">
                  <span class="text-sm text-white">{{ $t('footer.copyright') }}</span>
                </li>
              </ul>
            </nav>
            <ul class="flex flex-wrap items-center mt-5">
              <li v-for="(footerSocial, index) in footerSocials" :key="footerSocial.key" :class="`flex items-center justify-center w-10 mt-5 ${index !== footerSocials.length - 1 ? 'mr-5' : 'mr-0'
                } transition duration-300 ease-linear  hover:brightness-0 hover:invert`">
                <a :href="footerSocial.link" target="_blank" rel="noopener noreferrer"
                  class="flex items-center justify-center w-full">
                  <component :is="footerSocial.icon" class="
                      w-6
                      h-6
                      fill-current
                      text-accolade
                      transform
                      translate-y-[1px]
                    ">
                  </component>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </simplebar>
    </main>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'

import PartnerMulticoinCapital from '~/static/icons/partner-multicoin-capital.svg?inline'
import PartnerIdeoColab from '~/static/icons/partner-ideo-colab.svg?inline'
import PartnerFramework from '~/static/icons/partner-framework.svg?inline'
import PartnerSolana from '~/static/icons/partner-solana.svg?inline'
import PartnerHashed from '~/static/icons/partner-hashed.svg?inline'
import PartnerJacketRiver from '~/static/icons/partner-jacket-river.svg?inline'
import PartnerKnobs from '~/static/icons/partner-knobs.svg?inline'

import Twitter from '~/static/icons/twitter.svg?inline'
import Linkedin from '~/static/icons/linkedin.svg?inline'
import Github from '~/static/icons/github.svg?inline'
import Discord from '~/static/icons/discord.svg?inline'
import Telegram from '~/static/icons/telegram.svg?inline'
import Arrow from '~/static/icons/arrow.svg?inline'
import Menu from '~/static/icons/menu.svg?inline'
import Close from '~/static/icons/close.svg?inline'
import Website from '~/static/icons/website.svg?inline'

import 'simplebar/dist/simplebar.min.css'

export default {
  components: {
    simplebar,
    Twitter,
    Linkedin,
    Github,
    Discord,
    Telegram,
    Arrow,
    Menu,
    Close,
    Website,
  },
  data() {
    return {
      navItems: [
        {
          key: 'uplink',
          label: this.$t('section_hero.nav_items.uplink'),
          link: 'https://uplink.satellite.im',
        },
        {
          key: 'warp',
          label: this.$t('section_hero.nav_items.warp'),
          link: 'https://warp.satellite.im',
        },
        {
          key: 'blog',
          label: this.$t('section_hero.nav_items.blog'),
          link: 'https://satellite-im.medium.com/',
        },
      ],
      partners: [
        {
          key: 'multicoin-capital',
          logo: '/images/partner-multicoin-capital.svg',
          icon: PartnerMulticoinCapital,
          link: 'https://multicoin.capital/',
        },
        {
          key: 'ideo-colab',
          logo: '/images/partner-ideo-colab.svg',
          icon: PartnerIdeoColab,
          link: 'https://www.ideocolab.com/',
        },
        {
          key: 'framework',
          logo: '/images/partner-framework.svg',
          icon: PartnerFramework,
          link: 'https://framework.ventures/',
        },
        {
          key: 'solana',
          logo: '/images/partner-solana.svg',
          icon: PartnerSolana,
          link: 'https://solana.com/',
        },
        {
          key: 'hashed',
          logo: '/images/partner-hashed.svg',
          icon: PartnerHashed,
          link: 'https://www.hashed.com/',
        },
        {
          key: 'jacket-river',
          logo: '/images/partner-jacket-river.svg',
          icon: PartnerJacketRiver,
          link: 'https://www.jacketriver.com/portfolio/',
        },
        {
          key: 'knobs',
          logo: '/images/partner-knobs.svg',
          icon: PartnerKnobs,
          link: 'https://knobs.it/en/knobs-eng-home/',
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
          label: this.$t('section_meet.features.payments'),
        },
      ],
      features: [
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
      footerSocials: [
        {
          key: 'twitter',
          link: 'https://twitter.com/satellite_im',
          icon: Twitter,
        },
        {
          key: 'github',
          link: 'https://github.com/Satellite-im',
          icon: Github,
        },
        {
          key: 'discord',
          link: 'https://discord.gg/satellite',
          icon: Discord,
        },
      ],
      simplebar: null,
      slidesPerView: 1,
    }
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen
    },
  },
  mounted() {
    const vm = this

    this.simplebar = vm.$refs.simplebar.scrollElement
  },
  methods: {
    scroll(anchorId) {
      const anchor = document.querySelector(anchorId)
      window.history.pushState(null, null, anchorId);
      if (anchor) {
        this.simplebar.scrollTo({
          top: anchor.getBoundingClientRect().top,
          behavior: 'smooth',
        })
      }
    },
    openSidebar() {
      this.$store.commit('openSidebar')
    },
    closeSidebar() {
      this.$store.commit('closeSidebar')
    },
  },
}
</script>
