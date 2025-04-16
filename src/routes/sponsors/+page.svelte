<script lang="ts">
    import { onMount } from 'svelte';
    import TopNavSection from '../TopNavSection.svelte';
    import type { PageData } from './$types';
    import TagBlock from '$lib/components/TagBlock.svelte';
    import PracticalInformationSection from '../PracticalInformationSection.svelte';

    export let data: PageData;

    function adjustRowHeights() {
        const firstColumnRows = document.querySelectorAll('td.first-column-color div');
        const otherColumnsRows = document.querySelectorAll('td.cell-color div');

        firstColumnRows.forEach(row => {
            const rowClass = row.className;
            const rowHeight = row.offsetHeight;

            otherColumnsRows.forEach(otherRow => {
                if (otherRow.className === rowClass) {
                    otherRow.style.height = `${rowHeight}px`;
                }
            });
        });
    }

    onMount(() => {
        adjustRowHeights();
        window.addEventListener('resize', adjustRowHeights);

        // Clean up the event listener on component destroy
        return () => {
            window.removeEventListener('resize', adjustRowHeights);
        };
    });
</script>

<div class="bg-western">
    <header class="flex-center relative w-full bg-shark" id="header">
        <TopNavSection></TopNavSection>
    </header>
    <div class="m-8 mt-20 py-6">
        <div class="grid m-auto w-full max-w-6xl text-xl text-black">
            <div>
                <TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
                    We are excited to invite you to explore our sponsor packages for PyCon NL 2025, taking place on October 16, 2025. Our packages are designed to offer you maximum visibility and engagement with our vibrant community of Python enthusiasts from all over the world.
                </TagBlock>
            </div>

            <h2 class="font-bold text-2xl mb-4 spacing-top">Package Details</h2>
            
            <div class="mt-8">
                <div class="grid gap-4">
                    <TagBlock extend={true} direction="both" backgroundColor="north">
                        <h3 class="font-bold text-xl">Gold Package</h3>
                        <p>The Gold Package provides substantial visibility with logo placements, mentions in email newsletters, and social media promotions and the opening speech. Gold sponsors will also have 6 conference passes, and will be able to network directly with attendees via their networking table.</p>
                    </TagBlock>
                    <TagBlock extend={true} direction="both" backgroundColor="north2">
                        <h3 class="font-bold text-xl">Silver Package</h3>
                        <p>Our Silver Package includes logo placements on the website and in promotional materials, as well as mentions in event communications. Silver sponsors will have 3 conference passes, connecting with industry professionals and enthusiasts.</p>
                    </TagBlock>
                    <TagBlock extend={true} direction="both" backgroundColor="north3">
                        <h3 class="font-bold text-xl">Bronze Package</h3>
                        <p>The Bronze Package offers basic visibility with logo placements on the website and in select promotional materials. Bronze sponsors will be featured in event programs or on specific event pages and have 2 complimentary conference passes.</p>
                    </TagBlock>
                </div>
            </div>

            <div class="mt-4 flex items-center justify-center">
                <table class="table-with-spacing border border-gray-400 responsive-table">
                    <thead>
                        <tr class="header-row-color">
                            <th class="border border-gray-300 px-4 py-2"></th>
                            <th class="border border-gray-300 px-4 py-2">Gold</th>
                            <th class="border border-gray-300 px-4 py-2">Silver</th>
                            <th class="border border-gray-300 px-4 py-2">Bronze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2 first-column-color align-top">
                                <div class="pricing_row_1">Pricing</div>
                                <div class="pricing_row_2">Package price (excluding VAT)</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="pricing_row_1"></div>
                                <div class="pricing_row_2">€4,000.00</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="pricing_row_1"></div>
                                <div class="pricing_row_2">€2,000.00</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="pricing_row_1"></div>
                                <div class="pricing_row_2">€1,000.00</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2 first-column-color align-top">
                                <div class="available_row_1">Availability</div>
                                <div class="available_row_2">Number of available slots</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="available_row_1"></div>
                                <div class="available_row_2">2</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="available_row_1"></div>
                                <div class="available_row_2">2</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="available_row_1"></div>
                                <div class="available_row_2">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2 first-column-color align-top">
                                <div class="session_row_1">Session passes</div>
                                <div class="session_row_2">Complementary conference passes</div>
                                <div class="session_row_3">Conference passes with 50% discount</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="session_row_1"></div>
                                <div class="session_row_2">6</div>
                                <div class="session_row_3">6</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="session_row_1"></div>
                                <div class="session_row_2">3</div>
                                <div class="session_row_3">3</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="session_row_1"></div>
                                <div class="session_row_2">2</div>
                                <div class="session_row_3">1</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2 first-column-color align-top">
                                <div class="brand_row_1">Brand visibility</div>
                                <div class="brand_row_2">Table space</div>
                                <div class="brand_row_3">Mention in opening speech</div>
                                <div class="brand_row_4">Logo on PyConNL video</div>
                                <div class="brand_row_5">Logo on PyConNL banners</div>
                                <div class="brand_row_6">Logo on PyConNL website</div>
                                <div class="brand_row_7">Option to distribute goodies at the event</div>
                                <div class="brand_row_8">Vacancy flyer on centrally placed table</div>
                                <div class="brand_row_9">Logo in the PyConNL digital program guide</div>
                                <div class="brand_row_10">Advertisement in program guide</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="brand_row_1"></div>
                                <div class="brand_row_2">✔</div>
                                <div class="brand_row_3">✔</div>
                                <div class="brand_row_4">✔</div>
                                <div class="brand_row_5">✔</div>
                                <div class="brand_row_6">✔</div>
                                <div class="brand_row_7">✔</div>
                                <div class="brand_row_8">✔</div>
                                <div class="brand_row_9">✔</div>
                                <div class="brand_row_10">Full page</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="brand_row_1"></div>
                                <div class="brand_row_2"></div>
                                <div class="brand_row_3"></div>
                                <div class="brand_row_4"></div>
                                <div class="brand_row_5"></div>
                                <div class="brand_row_6">✔</div>
                                <div class="brand_row_7">✔</div>
                                <div class="brand_row_8"></div>
                                <div class="brand_row_9">✔</div>
                                <div class="brand_row_10">Half page</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="brand_row_1"></div>
                                <div class="brand_row_2"></div>
                                <div class="brand_row_3"></div>
                                <div class="brand_row_4"></div>
                                <div class="brand_row_5"></div>
                                <div class="brand_row_6"></div>
                                <div class="brand_row_7">✔</div>
                                <div class="brand_row_8"></div>
                                <div class="brand_row_9"></div>
                                <div class="brand_row_10">Quarter page</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2 first-column-color align-top">
                                <div class="communicatie_row_1">Communicatie</div>
                                <div class="communicatie_row_2">Social media announcement</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="communicatie_row_1"></div>
                                <div class="communicatie_row_2">✔</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="communicatie_row_1"></div>
                                <div class="communicatie_row_2">✔</div>
                            </td>
                            <td class="border border-gray-300 px-4 py-2 cell-color align-top">
                                <div class="communicatie_row_1"></div>
                                <div class="communicatie_row_2">✔</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-4 flex items-center justify-center">
                <a href="/PYCON NL Sponsorship brochure.pdf" target="_blank" rel="noopener noreferrer">
                    <TagBlock class="text-lg" backgroundColor="north">
                        <div class="hover:scale-105 font-bold">
                            Download <span class="px-4">|</span><span class="text-ordina">PYCON NL Sponsorship brochure</span>
                        </div>
                    </TagBlock>
                </a>
            </div>

            <div class="mt-8">
                <p>We would be delighted to discuss which package best aligns with your marketing and engagement goals. Please let us know if you have any specific requests or ideas for recognition that would make this partnership even more valuable for you.</p>
            </div>

            <div class="mt-8">
                <p>If you are interested in participating or have any questions, please get in touch with:</p>
            </div>
            <address class="italic">
                <p>Eva Munscher</p>
                <p>Esther Roghair</p>
                <a href="mailto:pycon.netherlands@gmail.com">pycon.netherlands@gmail.com</a><br />
            </address>

            <div class="mt-4 flex items-center justify-center">
                <a href="mailto:pycon.netherlands@gmail.com" target="_blank" rel="noopener noreferrer">
                    <TagBlock class="text-lg" backgroundColor="north">
                        <div class="hover:scale-105 font-bold">
                            Contact <span class="px-4">|</span><span class="text-ordina">Get in contact about sponsorship!</span>
                        </div>
                    </TagBlock>
                </a>
            </div>

            <div class="mt-8">
                <p>Thank you for considering this opportunity. We look forward to the possibility of collaborating with you to make PyCon NL 2025 a success!</p>
            </div>

            <!-- TODO: sponsors 2025 toevoegen -->
        </div>
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>

<style>
    /* colors determined by table in pdf */
    .header-row-color {
        background-color: #99acffFF;
    }
    .first-column-color {
        background-color: #cdd6ffFF;
    }
    .cell-color {
        background-color: #e3e8ffFF;
    }
    .table-with-spacing {
        display: table;
        border-spacing: 10px;
        border-collapse: separate;
    }
    .brand_row_1, .communicatie_row_1, .session_row_1, .available_row_1, .pricing_row_1 {
        font-weight: bold;
        font-size: 1.2em;
    }
    /* Om te zorgen dan elke styling correct wordt toegepast op elke cell moeten we de vertical align aangeven */
    .align-top {
        vertical-align: top;
    }
    /* Ik wil de tabel altijd volledig in beeld, met font groote dat leesbaar is op elk apparaat. We passen het aan op basis van de view width */
    .responsive-table {
        width: 100%;
        font-size: calc(0.2rem + 1vw);
    }
    .responsive-table td,
    .responsive-table th {
        vertical-align: top;
    }
    .spacing-top {
        margin-top: 2rem;
    }
</style>
