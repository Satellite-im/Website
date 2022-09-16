<template>
  <div id="app">
    <main class="w-full h-screen overflow-hidden bg-obsidian-shard">
      <simplebar ref="simplebar" class="absolute w-full h-full">
        <div class="z-10 w-full overflow-hidden">
          <nuxt-img
            src="/images/page-start-spotlight.webp"
            class="
              absolute
              transform
              translate-y-[-35%] translate-x-[-35%]
              pointer-events-none
            "
            alt="spotlight"
            provider="netlify"
          />
          <header class="flex items-center w-full h-24 px-10 md:px-20 lg:px-40">
            <nuxt-img
                src="/images/logo.webp"
                :alt="$t('satellite_logo')"
                class="flex md:order-1 w-[11.98rem] z-10 pr-25"
                provider="netlify"
              />
            <div class="flex md:order-2 pl-20">
              <a href="https://core.satellite.im">
                <button type="button" class="text-white rounded-xl bg-cool-green md:text-base hover:bg-spandex-green focus:bg-spandex-green w-28 md:w-48 h-12">{{ $t('try_alpha') }}</button>
              </a>
            </div>
            <div
              class="flex md:order-3 items-center justify-between w-full h-12 lg:justify-start"
            >
              <nav
                v-if="$viewport.isGreaterThan('md')"
                class="relative w-full h-full px-16 text-white"
              >
                <ul class="absolute bottom-0 flex mb-2">
                  <li
                    v-for="item in navItems"
                    :key="item.key"
                    class="mx-8 text-center align-middle first:ml-0 last:mr-0"
                  >
                    <button class="link-hover" @click="scroll(item.anchor)">
                      {{ item.label }}
                    </button>
                  </li>
                </ul>
              </nav>
              <button v-if="$viewport.isLessThan('lg')" @click="openSidebar()">
                <Menu class="w-8 h-8 text-white fill-current" />
              </button>
            </div>
          </header>
          <div
            v-if="isSidebarOpen && $viewport.isLessThan('lg')"
            class="fixed top-0 left-0 z-10 w-full h-full"
          >
            <div
              class="absolute w-full h-full bg-black opacity-90 sidebar-overlay"
              @click="closeSidebar()"
            ></div>
            <aside
              class="absolute top-0 right-0 w-10/12 h-full max-w-sm px-10  md:px-20 bg-gradient-to-r from-white to-burj-khalifa-fountain sidebar"
            >
              <header class="flex items-center w-full h-24">
                <button class="ml-auto" @click="closeSidebar()">
                  <Close class="w-8 h-8 fill-current text-obsidian-shard" />
                </button>
              </header>
              <simplebar class="h-[calc(100vh-(6rem*2))] text-obsidian-shard">
                <ul class="flex flex-col">
                  <li v-for="item in navItems" :key="item.key" class="mt-5">
                    <button
                      class="link-hover black"
                      @click=";[closeSidebar(), scroll(item.anchor)]"
                    >
                      {{ item.label }}
                    </button>
                  </li>
                </ul>
                <ul class="flex flex-col mt-5">
                  <li class="mt-5">
                    <a
                      href="https://core.satellite.im/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-hover black"
                      >{{ $t('footer.nav.app') }}</a
                    >
                  </li>
                  <li class="mt-5">
                    <a
                      href="https://help.satellite.one/en_US/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-hover black"
                      >{{ $t('footer.nav.contact_us') }}</a
                    >
                  </li>
                  <li class="mt-5">
                    <a
                      href="https://help.satellite.one/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-hover black"
                      >{{ $t('footer.nav.help') }}</a
                    >
                  </li>
                  <li class="mt-5">
                    <a
                      href="https://satellite-im.medium.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-hover black"
                      >{{ $t('footer.nav.blog') }}</a
                    >
                  </li>
                </ul>
              </simplebar>
              <footer class="flex items-center w-full h-24">
                <ul class="flex items-center justify-between w-full">
                  <li
                    class="
                      flex
                      justify-center
                      items-center
                      w-10
                      transition
                      duration-300
                      ease-linear
                      hover:invert-[0.4]
                    "
                  >
                    <a
                      href="https://twitter.com/satellite_im"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center w-full"
                    >
                      <Twitter
                        class="
                          w-5
                          h-5
                          fill-current
                          text-obsidian-shard
                          transform
                          translate-y-[1px]
                        "
                      />
                    </a>
                  </li>
                  <li
                    class="
                      flex
                      justify-center
                      items-center
                      w-10
                      transition
                      duration-300
                      ease-linear
                      hover:invert-[0.4]
                    "
                  >
                    <a
                      href="https://www.linkedin.com/company/satellite-im"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center w-full"
                      ><Linkedin
                        class="w-5 h-5 fill-current text-obsidian-shard"
                    /></a>
                  </li>
                  <li
                    class="
                      flex
                      justify-center
                      items-center
                      w-10
                      transition
                      duration-300
                      ease-linear
                      hover:invert-[0.4]
                    "
                  >
                    <a
                      href="https://github.com/Satellite-im"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center w-full"
                      ><Github class="w-5 h-5 fill-current text-obsidian-shard"
                    /></a>
                  </li>
                </ul>
              </footer>
            </aside>
          </div>
          <div
            class="flex justify-between px-10 py-14 md:py-28 md:px-20 md:pl-20 lg:pr-0 lg:pl-40"
          >
            <div
              class="
                flex flex-col
                justify-center
                w-full
                lg:w-[42.1875rem]
                flex-shrink-0
                xl:flex-shrink xl:max-w-2xl
                2xl:pr-4
              "
            >
              <h1 class="text-4xl text-white md:text-6xl">
                {{ $t('section_hero.title') }}
              </h1>
              <p class="mt-6 text-justify md:text-lg text-accolade">
                {{ $t('section_hero.description') }}
              </p>
              <div class="flex flex-wrap items-center justify-between">
                <StatStream class="w-20 mt-10 mr-10 md:w-24" />
                <StatChat class="mt-10 mr-10 w-44 md:w-52" />
                <StatFileShares class="w-20 mt-10 md:w-24" />
              </div>
              <div class="flex items-center mt-12">
                <div class="relative w-56 h-10 mt-4 mr-6 md:w-56 md:h-12">
                  <nuxt-img
                    src="/images/shadow-button-green.webp"
                    class="
                      absolute
                      w-96
                      transform
                      -translate-y-4
                      scale-[1.55]
                      pointer-events-none
                    "
                    alt="shadow"
                    provider="netlify"
                  />
                  <a
                    href="https://core.satellite.im"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="absolute flex items-center justify-center w-36 md:w-56 md:h-12 h-full text-sm font-bold text-center text-white transition duration-300 ease-linear outline-none  rounded-xl bg-cool-green md:text-base hover:bg-spandex-green focus:bg-spandex-green"
                  >
                    {{ $t('try_alpha') }}
                  </a>
                </div>
                <div class="relative ">
                <a
                  href="https://satelliteim.eo.page/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-36 md:w-56 h-10 mt-4 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-56 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge"
                >
                  {{ $t('sign_up') }}
                </a>
                </div>
              </div>
            </div>
            <div
              class="
                relative
                w-[43.75rem]
                2xl:w-[46.875rem]
                flex-shrink-0
                -z-10
              "
            >
              <nuxt-img
                src="/images/section-hero-spotlight.webp"
                :alt="$t('app_illustration')"
                class="
                  absolute
                  right-0
                  transform
                  scale-[1.2]
                  md:scale-[1.4]
                  -translate-y-1/4 -translate-x-1/4
                  md:translate-y-[-20%] md:translate-x-[-20%]
                  lg:translate-y-[-15%] lg:translate-x-[-15%]
                  xl:translate-y-[-10%] xl:translate-x-[12%]
                  2xl:translate-y-[-10%] 2xl:translate-x-[2%]
                "
                provider="netlify"
              />
              <nuxt-img
                v-if="$viewport.isGreaterThan('lg')"
                src="/images/section-hero-illustration.webp"
                :alt="$t('app_illustration')"
                class="
                  absolute
                  right-0
                  transform
                  scale-[1.075]
                  translate-y-[-20%] translate-x-[5%]
                  2xl:translate-y-[-20%] 2xl:translate-x-[-5%]
                "
                provider="netlify"
              />
            </div>
          </div>
          <div
            class="w-full px-10 mt-20 text-white 2xl:mt-40 md:px-20 lg:px-40"
          >
            <h2 class="text-lg md:text-xl">
              {{ $t('our_partners').toUpperCase() }}
            </h2>
            <ul class="flex flex-wrap items-center justify-center w-full mt-4">
              <li
                v-for="partner in partners"
                :key="partner.key"
                class="flex justify-center w-1/2 my-5  sm:w-1/3 lg:w-1/4 md:my-10"
              >
                <a
                  :href="partner.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="`flex-shrink-0 cursor-pointer partner-${partner.key}-link`"
                >
                  <component
                    :is="partner.icon"
                    :class="`partner-${partner.key}-img`"
                  >
                  </component>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="
            absolute
            left-1/2
            h-40
            transform
            -translate-x-1/2 -translate-y-8
            sm:translate-y-[-1px]
            bg-obsidian-shard
            divider
          "
        ></div>
        <div
          class="w-full px-10 pt-40  md:px-20 lg:px-40 bg-gradient-to-r from-white to-burj-khalifa-fountain"
        >
          <div class="w-full py-20">
            <h2 class="text-3xl text-center md:text-4xl text-obsidian-shard">
              {{ $t('section_meet.title') }}
            </h2>
            <ul class="flex flex-wrap items-center justify-center w-full">
              <li
                v-for="slogan in slogans"
                :key="slogan.key"
                class="flex flex-col items-center justify-center w-full mt-20  sm:w-1/2 xl:w-1/4"
              >
                <div
                  class="flex items-center justify-center  w-36 h-36 md:w-48 md:h-48"
                >
                  <nuxt-img
                    :src="`/images/section-meet-feature-${slogan.key}.webp`"
                    class="w-full transform -translate-x-4"
                    :alt="slogan.label"
                    provider="netlify"
                  />
                </div>
                <p
                  class="text-lg font-medium text-center  md:text-xl text-obsidian-shard"
                >
                  {{ slogan.label }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="about" class="relative z-10 w-full pt-40 overflow-hidden">
          <div
            v-if="$viewport.isLessThan('md')"
            class="
              relative
              w-[21.78rem]
              h-[34.23rem]
              sm:w-[27.23rem] sm:h-[42.79rem]
              m-auto
              mb-20
              sm:mb-4
              z-10
            "
          >
            <div
              class="
                absolute
                top-1/2
                transform
                translate-x-[-60%]
                -translate-y-1/2
              "
            >
              <nuxt-img
                src="/images/section-slogan-spotlight.webp"
                class="scale-[3.5] transform translate-y-[40%]"
                alt="spotlight"
                provider="netlify"
              />
            </div>
            <nuxt-img
              src="/images/section-slogan-illustration-mobile.webp"
              class="relative w-full h-full"
              :alt="$t('app_illustration')"
              provider="netlify"
            />
          </div>
          <div
            v-if="$viewport.isGreaterThan('sm')"
            class="
              relative
              w-[49.11rem]
              h-[36.52rem]
              lg:w-[64.63rem] lg:h-[48.07rem]
              2xl:w-[80.79rem] 2xl:h-[60.09rem]
              m-auto
              mb-24
              lg:mb-16
              2xl:mb-0
              z-10
            "
          >
            <div
              class="absolute transform translate-x-[-50%] pointer-events-none"
            >
              <nuxt-img
                src="/images/section-slogan-spotlight.webp"
                class="scale-[1.65] transform translate-y-16 lg:translate-y-24"
                alt="spotlight"
                provider="netlify"
              />
            </div>
            <nuxt-img
              src="/images/section-slogan-illustration.webp"
              class="relative w-full h-full transform -translate-x-10 translate-y-5 "
              :alt="$t('app_illustration')"
              provider="netlify"
            />
          </div>
          <h2
            class="absolute top-0 z-10 w-full px-10 m-auto text-3xl text-center text-white transform translate-y-24  md:px-20 lg:px-40 md:text-4xl"
          >
            {{ $t('section_slogan.title') }}
          </h2>
          <div
            class="relative w-full  bg-gradient-to-r from-white to-burj-khalifa-fountain"
          >
            <div
              class="
                absolute
                top-0
                left-1/2
                h-60
                transform
                -translate-x-1/2
                translate-y-[calc(-100%+1px)]
                bg-gradient-to-r
                from-white
                to-burj-khalifa-fountain
                divider-section-slogan
              "
            ></div>
            <div
              class="relative z-10 px-10 transform -translate-y-20  md:px-20 lg:px-40 md:translate-y-0 md:pb-20"
            >
              <div
                class="relative flex flex-col w-full  xl:flex-row xl:items-center"
              >
                <div
                  class="
                    flex-shrink-0
                    w-[16.32rem]
                    h-[13.73rem]
                    md:w-[20.40rem] md:h-[17.17rem]
                    xl:w-[25.51rem] xl:h-[21.47rem]
                    2xl:w-[31.89rem] 2xl:h-[26.84rem]
                    py-20
                  "
                >
                  <nuxt-img
                    src="/images/section-slogan-no-compromises.webp"
                    :alt="$t('section_slogan.no_compromises.title')"
                    class="transform translate-x-[-20%]"
                    provider="netlify"
                  />
                </div>
                <div
                  class="flex flex-col justify-center w-full py-20  xl:pl-44 2xl:pl-56"
                >
                  <h3
                    class="text-2xl  md:text-4xl xl:text-right text-obsidian-shard"
                  >
                    {{ $t('section_slogan.no_compromises.title') }}
                  </h3>
                  <p class="mt-10 md:text-lg xl:text-right text-patriot-blue">
                    {{ $t('section_slogan.no_compromises.description.one') }}
                  </p>
                  <p class="mt-5 md:text-lg xl:text-right text-patriot-blue">
                    {{ $t('section_slogan.no_compromises.description.two') }}
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col-reverse items-end w-full  xl:flex-row xl:items-center xl:mt-24"
              >
                <div
                  class="flex flex-col justify-center w-full py-20  xl:pr-44 2xl:pr-56"
                >
                  <h3
                    class="text-2xl text-right  md:text-4xl xl:text-left text-obsidian-shard"
                  >
                    {{ $t('section_slogan.multi_platform.title') }}
                  </h3>
                  <p
                    class="mt-10 text-right  md:text-lg xl:text-left text-patriot-blue"
                  >
                    {{ $t('section_slogan.multi_platform.description') }}
                  </p>
                  <div
                    class="relative w-40 h-10 ml-auto  md:w-44 md:h-12 mt-14 xl:ml-0"
                  >
                  <a
                    href="https://core.satellite.im"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="absolute flex items-center justify-center w-40 h-full text-sm font-bold text-center text-white transition duration-300 ease-linear outline-none  rounded-xl bg-cool-green md:text-base hover:bg-spandex-green focus:bg-spandex-green"
                  >
                    {{ $t('try_alpha') }}
                  </a>
                  </div>
                </div>
                <div
                  class="
                    flex-shrink-0
                    w-[16.32rem]
                    h-[14.496rem]
                    md:w-[20.40rem] md:h-[18.12rem]
                    xl:w-[25.51rem] xl:h-[22.65rem]
                    2xl:w-[31.89rem] 2xl:h-[28.32rem]
                    py-20
                  "
                >
                  <nuxt-img
                    src="/images/section-slogan-multi-platform.webp"
                    :alt="$t('section_slogan.multi_platform.title')"
                    class="transform translate-x-[5%]"
                    provider="netlify"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" class="relative z-10 w-full pt-20 overflow-hidden">
          <h2 class="mt-10 text-3xl text-center text-white md:text-4xll">
            {{ $t('section_features.title') }}
          </h2>
          <div
            class="relative flex justify-center px-10 mt-20 mb-32  2xl:mb-0 md:px-20 lg:px-40"
          >
            <div
              class="
                absolute
                bottom-0
                w-[189rem]
                h-[144.26rem]
                transform
                translate-y-[40%]
              "
            >
              <nuxt-img
                src="/images/section-features-spotlight.webp"
                class="opacity-50 pointer-events-none"
                alt="spotlight"
                provider="netlify"
              />
            </div>
            <ul class="flex flex-col">
              <li
                v-for="feature in features"
                :key="feature.key"
                :class="`relative flex flex-col justify-center w-full min-w-md max-w-xl h-24 md:h-28 mt-5 pl-20 pr-5 rounded-lg ${
                  feature.isActive
                    ? 'bg-gradient-to-l from-white to-burj-khalifa-fountain'
                    : ''
                } before:absolute before:left-0 before:top-1/2 before:block before:w-3 before:h-3 md:before:w-4 md:before:h-4 before:rounded-full before:transform before:translate-x-8 before:-translate-y-1/2 ${
                  feature.isActive ? 'before:bg-retro-blue' : 'before:bg-white'
                } `"
              >
                <h3
                  :class="`text-lg md:text-xl ${
                    feature.isActive ? 'text-obsidian-shard' : 'text-white'
                  }`"
                >
                  {{ feature.title }}
                </h3>
                <p
                  :class="`mt-2 md:text-lg ${
                    feature.isActive ? 'text-patriot-blue' : 'text-accolade'
                  }`"
                >
                  {{ feature.description }}
                </p>
              </li>
            </ul>
            <div
              v-if="$viewport.isGreaterThan('lg')"
              class="
                flex flex-shrink-0
                justify-center
                items-center
                w-[34.09rem]
                h-[47.21rem]
                2xl:w-[42.62rem] 2xl:h-[59.02rem]
              "
            >
              <nuxt-img
                src="images/section-features-illustration.webp"
                :alt="$t('section_features.features.sharing.title')"
                class="transform scale-110 translate-y-24  2xl:scale-100 2xl:translate-y-10"
                provider="netlify"
              />
            </div>
          </div>
          <div
            class="w-full px-10 pt-20 mt-20  md:px-20 lg:px-40 bg-gradient-to-r from-white to-burj-khalifa-fountain"
          >
            <div
              id="access"
              class="relative flex flex-col items-start w-full -translate-y-20  xl:flex-row xl:items-center md:translate-y-0"
            >
              <div class="flex items-center justify-center py-20">
                <div
                  class="
                    w-[17.61rem]
                    h-[15.80rem]
                    md:w-[22.02rem] md:h-[19.76rem]
                    xl:w-[27.53rem] xl:h-[24.71rem]
                    2xl:w-[34.42rem] 2xl:h-[30.89rem]
                    z-10
                  "
                >
                  <nuxt-img
                    src="/images/section-team-early-access.webp"
                    class="ransform translate-x-[-25%] translate-y-10"
                    :alt="$t('section_slogan.no_compromises.title')"
                    provider="netlify"
                  />
                </div>
              </div>
              <div
                class="flex flex-col justify-center w-full  xl:py-20 xl:pl-44 2xl:pl-56"
              >
                <h3
                  class="text-2xl md:text-4xl xl:text-right text-obsidian-shard"
                >
                  {{ $t('section_early_access.title') }}
                </h3>
                <p class="mt-10 md:text-lg xl:text-right text-patriot-blue">
                  {{ $t('section_early_access.description.one') }}
                </p>
                <p class="mt-5 md:text-lg xl:text-right text-patriot-blue">
                  {{ $t('section_early_access.description.two') }}
                </p>
                <div class="flex mt-4 xl:ml-auto">
                  <div class="relative w-52 h-10 md:w-52 md:h-12 mt-14">
                    <a
                      href="https://satelliteim.eo.page/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="absolute flex items-center justify-center w-full h-full text-sm font-bold text-center 
                      transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-52 md:h-12 rounded-xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge"
                    >
                      {{ $t('sign_up') }}
                    </a>
                  </div>
                  <a
                    href="https://core.satellite.im"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-48 h-10 ml-6 text-sm font-bold text-center transition duration-300 ease-linear bg-cool-green shadow-lg outline-none  md:w-52 md:h-12 mt-14 rounded-xl text-white md:text-base hover:bg-spandex-green focus:bg-spandex-green"
                  >
                    {{ $t('try_release') }}
                  </a>
                </div>
              </div>
            </div>
            <div id="team" class="relative md:max-w-[45%] mt-10 md:mt-20 py-20">
              <div class="w-full">
                <h3 class="text-2xl md:text-4xl text-obsidian-shard">
                  {{ $t('section_team.title') }}
                </h3>
                <p class="mt-10 md:text-lg text-patriot-blue">
                  {{ $t('section_team.description') }}
                </p>
                <a
                  href="https://github.com/Satellite-im"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-48 h-10 text-sm font-bold text-center transition duration-300 ease-linear bg-white shadow-lg outline-none  md:w-52 md:h-12 mt-14 rounded-3xl text-retro-blue md:text-base hover:bg-extraordinary-abundance-of-tinge focus:bg-extraordinary-abundance-of-tinge"
                >
                  {{ $t('github') }}
                </a>
              </div>
            </div>
            <div
              class="relative flex flex-wrap items-center justify-center  md:mt-0"
            >
              <div
                v-for="teamMember in team"
                :key="teamMember.key"
                class="flex flex-col items-center justify-center w-full mt-20  xs:w-1/2 lg:w-1/3 3xl:w-1/4"
              >
                <nuxt-img
                  :src="teamMember.image"
                  class="w-40 h-40  md:w-48 md:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64"
                  :alt="teamMember.name"
                  provider="netlify"
                />
                <p
                  class="text-lg font-medium text-center  md:text-xl text-obsidian-shard"
                >
                  {{ teamMember.name }}
                </p>
                <div class="flex justify-center h-16">
                  <p class="mt-2 text-center md:text-lg text-patriot-blue">
                    {{ teamMember.occupation }}
                  </p>
                </div>
                <ul class="flex items-center justify-center h-10">
                  <li
                    v-for="social in teamMember.socials"
                    :key="social.key"
                    class="w-10 h-full mx-4"
                  >
                    <a
                      :href="social.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center w-full h-full"
                    >
                      <Linkedin
                        v-if="social.key === 'linkedin'"
                        class="
                          w-6
                          2xl:w-7
                          h-6
                          2xl:h-7
                          fill-current
                          text-obsidian-shard
                          transform
                          -translate-y-[1px]
                        "
                      />
                      <Github
                        v-if="social.key === 'github'"
                        class="w-6 h-6 fill-current  2xl:w-7 2xl:h-7 text-obsidian-shard"
                      />
                      <Website
                        v-if="social.key === 'website'"
                        class="
                          w-6
                          2xl:w-7
                          h-6
                          2xl:h-7
                          fill-current
                          text-obsidian-shard
                          scale-110
                          transform
                          translate-y-[2px]
                        "
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative w-full h-[10rem] mt-56">
              <div
                class="
                  absolute
                  left-1/2
                  h-40
                  transform
                  -translate-x-1/2
                  translate-y-[1px]
                  bg-obsidian-shard
                  overflow-hidden
                  divider-footer
                "
              >
                <nuxt-img
                  src="/images/footer-spotlight.webp"
                  class="transform scale-75 -translate-x-20 -translate-y-6  xs:-translate-y-8 xs:-translate-x-32 md:-translate-y-14 md:-translate-x-56 lg:-translate-y-16 lg:-translate-x-40 2xl:-translate-x-20"
                  alt="spotlight"
                  provider="netlify"
                />
              </div>
            </div>
          </div>
        </div>
        <footer
          class="relative z-10 px-10 transform -translate-y-20  pb-36 md:px-20 lg:px-40 2xl:px-72 xl:-translate-y-10"
        >
          <div class="relative flex flex-wrap items-end w-full">
            <nuxt-img
              src="/images/logo.webp"
              :alt="$t('satellite_logo')"
              class="w-[14.37rem] mr-20 mt-10 transform translate-y-2 z-10"
              provider="netlify"
            />
            <nav class="w-full mt-5 mr-auto xl:w-auto">
              <ul class="flex flex-wrap items-center">
                <li class="w-full mt-5 xs:w-auto xs:mr-14">
                  <a
                    href="https://core.satellite.im"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-white link-hover"
                    >{{ $t('footer.nav.app') }}</a
                  >
                </li>
                <li class="w-full mt-5 xs:w-auto xs:mr-14">
                  <a
                    href="https://help.satellite.one/en_US/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-white link-hover"
                    >{{ $t('footer.nav.contact_us') }}</a
                  >
                </li>
                <li class="w-full mt-5 xs:w-auto xs:mr-14">
                  <a
                    href="https://help.satellite.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-white link-hover"
                    >{{ $t('footer.nav.help') }}</a
                  >
                </li>
                <li class="w-full mt-5 xs:w-auto xs:mr-14">
                  <a
                    href="https://satellite-im.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-white link-hover"
                    >{{ $t('footer.nav.blog') }}</a
                  >
                </li>
              </ul>
            </nav>
            <ul class="flex flex-wrap items-center mt-5">
              <li
                v-for="(footerSocial, index) in footerSocials"
                :key="footerSocial.key"
                :class="`flex items-center justify-center w-10 mt-5 ${
                  index !== footerSocials.length - 1 ? 'mr-5' : 'mr-0'
                } transition duration-300 ease-linear  hover:brightness-0 hover:invert`"
              >
                <a
                  :href="footerSocial.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-full"
                >
                  <component
                    :is="footerSocial.icon"
                    class="
                      w-6
                      h-6
                      fill-current
                      text-accolade
                      transform
                      translate-y-[1px]
                    "
                  >
                  </component>
                </a>
              </li>
            </ul>
          </div>
          <p class="mt-20 text-sm text-accolade">
            {{ $t('footer.copyright') }}
          </p>
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

import StatStream from '~/static/icons/stat-stream.svg?inline'
import StatChat from '~/static/icons/stat-chat.svg?inline'
import StatFileShares from '~/static/icons/stat-file-shares.svg?inline'
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
    StatChat,
    StatStream,
    StatFileShares,
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
      team: [
        {
          key: 'matt',
          image: '/images/team-matt.webp',
          name: 'Matt Wisniewski',
          occupation: this.$t('section_team.team.matt_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/matthew-wisniewski-a959a041/',
            },
            {
              key: 'github',
              link: 'https://github.com/RetroPronghorn',
            },
            {
              key: 'website',
              link: 'https://retropronghorn.github.io/',
            },
          ],
        },
        {
          key: 'manuel',
          image: '/images/team-manuel.webp',
          name: 'Manuel Tumiati',
          occupation: this.$t('section_team.team.manuel_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/manuel-tumiati/',
            },
            { key: 'github', link: 'https://github.com/iltumio' },
            { key: 'website', link: 'https://iltumio.dev/' },
          ],
        },
        {
          key: 'chris',
          image: '/images/team-chris.webp',
          name: 'Chris Hogan',
          occupation: this.$t('section_team.team.chris_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/wanderinghogan/',
            },
            {
              key: 'github',
              link: 'https://github.com/wanderinghogan',
            },
          ],
        },
        {
          key: 'tom',
          image: '/images/team-tom.webp',
          name: 'Tom McArdle',
          occupation: this.$t('section_team.team.tom_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/tom-m-47b39a2a/',
            },
          ],
        },
        {
          key: 'mauro',
          image: '/images/team-mauro.webp',
          name: 'Mauro Molinari',
          occupation: this.$t('section_team.team.mauro_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/mauro-molinari-4ab566168/',
            },
            {
              key: 'github',
              link: 'https://github.com/molimauro',
            },
          ],
        },
        {
          key: 'miru',
          image: '/images/team-miru.webp',
          name: 'Miru Shim',
          occupation: this.$t('section_team.team.miru_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/miru-shim-16769a91/',
            },
            {
              key: 'website',
              link: 'https://www.mirushimcreative.com/copy-of-branding-promotion',
            },
          ],
        },
        {
          key: 'wendy',
          image: '/images/team-wendy.webp',
          name: 'Wendy Morgan',
          occupation: this.$t('section_team.team.wendy_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/wendy-morgan-0a1100224/',
            },
          ],
        },
        {
          key: 'jeff',
          image: '/images/team-jeff.webp',
          name: 'Jeff Morris',
          occupation: this.$t('section_team.team.jeff_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/jeffrey-morris-2417a177/',
            },
            {
              key: 'github',
              link: 'https://github.com/Jekrimo',
            },
          ],
        },
        {
          key: 'kevin',
          image: '/images/team-kevin.webp',
          name: 'Kevin McComas',
          occupation: this.$t('section_team.team.kevin_occupation'),
          socials: [],
        },
        {
          key: 'elizabeth',
          image: '/images/team-elizabeth.webp',
          name: 'Elizabeth Brown',
          occupation: this.$t('section_team.team.elizabeth_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/lizasherdesign/',
            },
            {
              key: 'website',
              link: 'https://www.lizasherdesign.com/projects',
            },
          ],
        },
        {
          key: 'phill',
          image: '/images/team-phill.webp',
          name: 'Phill Wisniewski',
          occupation: this.$t('section_team.team.phill_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/phillip-wisniewski-9472aa224/',
            },
          ],
        },
        {
          key: 'sara',
          image: '/images/team-sara2.webp',
          name: 'Sara Tavares',
          occupation: this.$t('section_team.team.sara_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/sara-t-3545a0126/',
            },
            {
              key: 'github',
              link: 'https://github.com/stavares843',
            },
          ],
        },
        {
          key: 'lauren',
          image: '/images/team-lauren.webp',
          name: 'Lauren Harrington',
          occupation: this.$t('section_team.team.lauren_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/lauren-harrington-022430160/',
            },
          ],
        },
        {
          key: 'joe',
          image: '/images/team-joe.webp',
          name: 'Joe McGrath',
          occupation: this.$t('section_team.team.joe_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/josephmcg',
            },
            {
              key: 'github',
              link: 'https://github.com/josephmcg',
            },
          ],
        },
        {
          key: 'sheldon',
          image: '/images/team-sheldon.webp',
          name: 'Sheldon McGee',
          occupation: this.$t('section_team.team.sheldon_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/tooshel/',
            },
            {
              key: 'github',
              link: 'https://github.com/tooshel',
            },
          ],
        },
        {
          key: 'thomas',
          image: '/images/team-thomas.webp',
          name: 'Thomas Bosatelli',
          occupation: this.$t('section_team.team.thomas_occupation'),
          socials: [
            {
              key: 'github',
              link: 'https://github.com/ThomBos',
            },
          ],
        },
        {
          key: 'andre',
          image: '/images/team-andre.webp',
          name: 'Andre Pramaditya',
          occupation: this.$t('section_team.team.andre_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/drepram/',
            },
            {
              key: 'github',
              link: 'https://github.com/drepram/',
            },
          ],
        },
        {
          key: 'luis',
          image: '/images/team-luis.webp',
          name: 'Luis Cardeña',
          occupation: this.$t('section_team.team.luis_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/luiscardenamaldonado',
            },
            {
              key: 'github',
              link: 'https://github.com/luisecm',
            },
          ],
        },
        {
          key: 'pavel',
          image: '/images/team-pavel.webp',
          name: 'Pavel Lozko',
          occupation: this.$t('section_team.team.pavel_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/pavel-lozka-563031113/',
            },
            {
              key: 'github',
              link: 'https://github.com/pavlzk',
            },
          ],
        },
        {
          key: 'darius',
          image: '/images/team-darius.webp',
          name: 'Darius Clark',
          occupation: this.$t('section_team.team.darius_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/darius-clark-21b02671',
            },
            {
              key: 'github',
              link: 'https://github.com/dariusc93',
            },
          ],
        },
        {
          key: 'calogero',
          image: '/images/team-calogero.webp',
          name: 'Calogero Cimino',
          occupation: this.$t('section_team.team.calogero_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/calogero-cimino-6b0264105',
            },
            {
              key: 'github',
              link: 'https://github.com/calogero93',
            },
          ],
        },
        {
          key: 'drew',
          image: '/images/team-drew.webp',
          name: 'Drew Ewing',
          occupation: this.$t('section_team.team.drew_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/apewing',
            },
            {
              key: 'github',
              link: 'https://github.com/aewing',
            },
          ],
        },
        {
          key: 'nicholas',
          image: '/images/team-nicholas.webp',
          name: 'Nicholas Zaccagnino',
          occupation: this.$t('section_team.team.nicholas_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/zaccagnino-nicholas/',
            },
            {
              key: 'github',
              link: 'https://github.com/JustZacca',
            },
          ],
        },
        {
          key: 'yijing',
          image: '/images/team-yijing.webp',
          name: 'Yijing Huang',
          occupation: this.$t('section_team.team.yijing_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/huangyijing/',
            },
            {
              key: 'github',
              link: 'https://github.com/hyj1204',
            },
          ],
        },
        {
          key: 'lucas',
          image: '/images/team-lucas.webp',
          name: 'Lucas Marchi',
          occupation: this.$t('section_team.team.lucas_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/lgmarchi/',
            },
            {
              key: 'github',
              link: 'https://github.com/lgmarchi',
            },
          ],
        },
        {
          key: 'jason',
          image: '/images/team-jason.webp',
          name: 'Jason Woodland',
          occupation: this.$t('section_team.team.jason_occupation'),
          socials: [
            {
              key: 'website',
              link: 'https://jasonwoodland.com/',
            },
            {
              key: 'github',
              link: 'https://github.com/jasonwoodland',
            },
          ],
        },
        {
          key: 'muhammad',
          image: '/images/team-muhammad.webp',
          name: 'Muhammad Al Juburi',
          occupation: this.$t('section_team.team.muhammad_occupation'),
          socials: [
            {
              key: 'linkedin',
              link: 'https://www.linkedin.com/in/maljuburi',
            },
            {
              key: 'github',
              link: 'https://github.com/maljuburi',
            },
            {
              key: 'website',
              link: 'https://www.maljuburi.com/',
            },
          ],
        },
        {
          key: 'nathan',
          image: '/images/team-nathan.png',
          name: 'Nathan Power',
          occupation: this.$t('section_team.team.nathan_occupation'),
          socials: [
            {
              key: 'website',
              link: 'https://nathanpower.com.au',
            },
            {
              key: 'github',
              link: 'https://github.com/nathan-power',
            },
          ],
        },
      ],
      footerSocials: [
        {
          key: 'twitter',
          link: 'https://twitter.com/satellite_im',
          icon: Twitter,
        },
        {
          key: 'linkedin',
          link: 'https://www.linkedin.com/company/satellite-im',
          icon: Linkedin,
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
        {
          key: 'telegram',
          link: 'https://t.me/SatelliteIM',
          icon: Telegram,
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