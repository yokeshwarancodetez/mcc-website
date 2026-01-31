import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MCCHistory() {
  return (
    <main className="flex flex-col w-full">
     

      {/* Hero Section */}
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">History of the Malaysian Ceylonese Congress</h1>
          <p className="text-sm sm:text-base text-black-100 font-bold leading-relaxed">Complete Historical Record (1900 - 2006)</p>
         
        </div>
    

      {/* Main Timeline Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Section */}
          <div className="mb-12 sm:mb-16">
            <p className="text-gray-700 leading-relaxed mb-4">
              The formation of the Malayan Ceylonese Congress in 1958 is the climax to the public life of Ceylonese in Malaya.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a prelude to the history of the M. C. C., it is important to take notice of the growth of Jaffnese Associations in the early twentieth century. The impetus for the growth of such associations was to provide for the social, cultural, religious needs and sporting activities for the Ceylonese. In the major towns where the Ceylon Tamils settled, associations were formed, motivated essentially by the desire to preserve the cultural distinctiveness of their group.
            </p>
          </div>

          {/* FOUNDATION ERA - 1900-1912 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CE0000] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                {/* Era Header */}
                <div className="bg-[#CE0000] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">🏛️</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Foundation Era: Early Ceylonese Associations</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1900 - 1912</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Selangor Ceylon Tamils Association (1900)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The first organised Society which looked after the interests of the Ceylonese as a whole was the Selangor Ceylon Tamils Association founded in 1900. The records of which meeting was then kindly supplied by the veteran school master, Mr. R. Thampipillay, J.P. At 7.00 p.m. on the 24th day of December, 1900 about 53 Ceylon Tamils of Selangor assembled at the residence of Mr. V. Sinnappah, well-known and influential Station-Master, Kuala Lumpur and unanimously resolved to form the Selangor Ceylon Tamil's Association.
                    </p>

                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">Objects of the Association:</p>
                      <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-2">
                        <li>To build and maintain a Kandasamy Temple and the Cremation Ground (off Circular Road) which had been granted to the Ceylon Tamils by the Selangor Government</li>
                        <li>To safeguard the general interests of the Ceylonese residing in Malaya</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-4">Office-bearers and Committee Members (1900-1902):</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <p><span className="font-semibold">President:</span> Mr. Visuvanathan (Vaddukuoddai) - Head Overseer, P.W.D. Kuala Lumpur</p>
                        <p><span className="font-semibold">Vice-President:</span> Mr. S. Saravanamuthu (Udupiddy) - Head-overseer, Sanitary Board, Kuala Lumpur</p>
                        <p><span className="font-semibold">Hon. Secretary:</span> Mr. Kanagasabapathy (Mallagam) - Clerk, Secretariat, K.L.</p>
                        <p><span className="font-semibold">Hon. Treasurer:</span> Mr. V. Sinnappah (Veeman Kaman, Tellipalai) - Station Master, Kuala Lumpur</p>
                        <p className="font-semibold mt-3">Committee Members:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 mt-2">
                          <p>Mr. C. Thambapillai (Tinnevelly North)</p>
                          <p>Mr. S. T. Pillay (Urumparay)</p>
                          <p>Mr. Seenivasagam (Adchu Veli)</p>
                          <p>Mr. V. Sanmugam (Mulai)</p>
                          <p>Mr. Sittampalam (Araly)</p>
                          <p>Mr. S. Chellathamby (Trincomalee)</p>
                          <p>Mr. S. Thambyrajah (Kanderodai)</p>
                          <p>Mr. W. Wijaiaratnam (Araly)</p>
                          <p>Mr. V. Eliathamby (Urumparay)</p>
                          <p>Mr. R. Arumugam (Colombogam)</p>
                          <p className="col-span-1 sm:col-span-2">Rev. S. Abraham (Urumparay)</p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Early Unity Attempts (1900-1912)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      As years went by and Ceylonese population increased, the need for an organisation to represent all Ceylonese interests was keenly felt. Several discussions were conducted to form an Association to include all Ceylonese i.e. Tamils, Singhalese, Burghers, Moors and Ceylon Malays. Two definite attempts were made, the first in Kuala Lumpur at a meeting convened at the Town Hall and the second in Singapore at a meeting held in the Victoria Memorial Hall. Unfortunately both these meetings were unsuccessful.
                    </p>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      In 1912 Mr. M. W. Navaratnam, who was the Secretary of the Selangor Ceylon Tamils Association, made a bold attempt to form an Association.
                    </p>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Ceylon Association of Selangor (1912)</h3>
                    
                    <div className="bg-amber-50 p-4 sm:p-6 rounded-lg mb-4 border-l-4 border-[#CE0000] italic">
                      <p className="font-semibold text-[#CE0000] text-sm sm:text-base mb-2">"A New Body With Justifiable Ambition"</p>
                      <p className="text-xs sm:text-sm text-gray-700">
                        "The Ceylon Association of Selangor, the youngest of the Ceylonese organisations in Malaya shows every sign of it becoming a very active and useful institution. We have seen its Constitution and we believe that there is ample scope for its aims and objects not only in Selangor but outside its limits."
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">Committee of Management - First Year:</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <p><span className="font-semibold">President:</span> Mr. M. W. Navaratnam</p>
                        <p><span className="font-semibold">Vice-President:</span> Mr. B. T. S. Naysadurai</p>
                        <p><span className="font-semibold">Hon. Secretaries:</span> Mr. M. A. Akbar, Mr. P. Ratnadurai</p>
                        <p><span className="font-semibold">Hon. Treasurer:</span> Mr. C. O. La Brooy</p>
                        <p className="font-semibold mt-3">Members of Committee:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-2 mt-2">
                          <p>Mr. V. Chelliah</p>
                          <p>Mr. W. W. Fernando</p>
                          <p>Mr. J. C. Jayatilaka</p>
                          <p>Mr. H. J. C. Kulasinghe</p>
                          <p>Mr. P. Mailvaganam</p>
                          <p>Mr. J. D. A. Puvirajasinghe</p>
                          <p>Mr. G. W. de Silva</p>
                          <p>Mr. F. A. Samaranayaka</p>
                          <p>Mr. J. S. Wijasuriya</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      At the inaugural meeting, the President, Mr. M. W. Navaratnam briefly explaining the purpose of the Association said, "The Ceylon Association of Selangor is formed with the intention of bringing together the various communities of Ceylonese residents in Malaya and this has been a long-felt want," and he then quoted what Sir Andrew Caldecott said, "If you are going to be good Ceylonese, you must have Tamils, Singhalese, Burghers, Moors and Malay Clubs all of them."
                    </p>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Community Development (1924-1955)</h3>
                    
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The material well being of the community was not neglected. In order to prevent indebtedness and to encourage thrift among the Jaffna Tamils, the Jaffnese Co-operative Society (JCS) was established in 1924. It encouraged members to invest and loans at reasonable rates were granted for educational expense, medical treatment, funeral expenses and purchase of household necessities etc.
                    </p>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The Malayan Ceylonese Provident Fund was planned and subsequently organised by the Association. Within the next few years, this Provident Fund became very popular among the Ceylonese and the president of the Ceylon Association of Selangor, Mr. M. W. Navaratnam was also the president of the Malayan Ceylonese Provident Fund for well over 18 years.
                    </p>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      In 1955 when the Malaysian deputation, under the leadership of Y.T.M. Tunku Abdul Rahman Putra Al Haj left for Britain to seek Independence, the Ceylon Association of Selangor was the first Ceylonese organisation to entertain the deputation to tea and pledged their loyalty while wishing God-speed and success.
                    </p>

                    <div className="bg-purple-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">Memorable Function - December 1955</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        The Chief Minister, Tunku Abdul Rahman and the newly-elected Ceylonese representative in the Federal Legislative Council were entertained at a tea party on Friday December 9th 1955 by the Ceylon Association of Selangor.
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Mr. M. W. Navaratnam, President of the Association said that the large gathering present was a testimony to the importance of the occasion. The Chief Minister's mission to Britain to obtain Merdeka will be a complete success.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* BIRTH OF MCC - 1958 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#003087] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#003087] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">🎯</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Birth of the Malaysian Ceylonese Congress</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1958</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    After Malaya attained independence, the Ceylon Association of Selangor followed suit in common with other organizations to establish the Malayan Ceylonese Congress.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    The "Malaysian Ceylonese Congress Party" was the brainchild of the late Mr. M. W. Navaratnam. It was formed as an opposition party to the Ceylon Federation under the leadership of the late Sir Clough Thuraisingam. The Ceylon Federation of Malaya was the only party which was recognized by the government at that time and enjoyed the privilege of a seat in the Senate.
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Mr. M. W. Navaratnam announced the birth of the Malayan Ceylonese Congress (M.C.C.) on the 24th day of February 1958 with address of No: 54, Pudu Road, 5th Floor, Ng Keat Thong Building, Kuala Lumpur and registration number PPM/WP/66158.
                  </p>

                  <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4">
                    <p className="font-semibold text-[#003087] text-sm sm:text-base">Purpose of the Malaysian Ceylonese Congress:</p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">To promote and safeguard the Political, Educational, Social and Cultural interests of the Malaysian Ceylonese Community.</p>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic border-l-4 border-[#CE0000] pl-4">
                    "There is a great lack of unity among the Ceylonese population in Malaya," said Mr. Navaratnam. "There are a number of Ceylon organisations in this country today but none of these organisations co operate with others. The disunity amongst the Ceylonese is due to the few who put their own interests first and even show jealousy and mutual dislike instead of general good will."
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Mr Navaratnam then concluded his presidential address by announcing the winding up of the Ceylon Association of Selangor and the BIRTH OF THE MALAYAN CEYLONESE CONGRESS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONSTITUTIONAL RECOGNITION - 1966-1969 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CE0000] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#CE0000] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">📋</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Constitutional Recognition and Growth</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1966 - 1969</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Official Registration (1966)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      In 1966, when the new Societies Act was brought into effect, the constitution of the Congress was revised and registration was obtained on the 6th of June 1966.
                    </p>

                    <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">The Societies Act 1966 Registration:</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <p><span className="font-semibold">Name of Society:</span> Malayan Ceylonese Congress</p>
                        <p><span className="font-semibold">Address:</span> No 48 Thamby Abdullah Road, Kuala Lumpur</p>
                        <p><span className="font-semibold">Registration No:</span> 135 (Selangor)</p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">New Leadership (1967)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      Mr. M. W. Navaratnam continued as President of M.C.C. with a few changes in the committee till 1967, when a new Executive Committee was elected.
                    </p>

                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-4">Executive Committee (1967):</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <p><span className="font-semibold">President:</span> Mr. M. W. Navaratnam, AMN, JP</p>
                        <p><span className="font-semibold">Vice-President:</span> Mr. L.C. Jayatilaka</p>
                        <p><span className="font-semibold">Secretary General:</span> Mr. A.B. Samuels</p>
                        <p><span className="font-semibold">Hon. Treasurer:</span> Mr. A. Arunasalam</p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Unity Efforts (1969)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      In 1969, unity talks were held between the Malayan Ceylonese Congress and the Ceylon Federation of Malaya. Both organisations agreed to merge and the new organisation was officially named the MALAYSIAN CEYLONESE CONGRESS.
                    </p>

                    <div className="bg-purple-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">Inaugural Pro-tern Executive Committee (1969-1970):</p>
                      <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                        <p><span className="font-semibold">President:</span> Dr. C. Sinnadurai</p>
                        <p><span className="font-semibold">Vice-Presidents:</span> Mr. M. W. Navaratnam (AMN, JP), Mr. E. S. Palaniappan (SIMP, JMN, KMN)</p>
                        <p><span className="font-semibold">Deputy Presidents:</span> Dr. J. A. Sinnadurai (DPMS, JMN, AMN), Mr. Sabalingam Chelliah (PIS)</p>
                        <p><span className="font-semibold">Secretary General:</span> Mr. S. Kandasamy (AMN)</p>
                        <p><span className="font-semibold">Deputy Secretary General:</span> Mr. A. B. Samuels</p>
                        <p><span className="font-semibold">Treasurer:</span> Dr. T. P. Murugiah</p>
                        <p><span className="font-semibold">Deputy Treasurer:</span> Mr. P. W. M. G. Joseph</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* ERA OF SENATOR TAN SRI DATO DR. C. SINNADURAI - 1970-1983 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#003087] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#003087] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">👔</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Era of Senator Tan Sri Dato Dr. C. Sinnadurai</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1970 - 1983</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Constitutional Assembly (October 1970)</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The MCC Constitutional General Assembly was held at the Chinese Assembly Hall, KL on 4th October 1970. The President, Dr. Sinnadurai welcoming the delegates and members said the call for unity should be responded to at all levels and urged the party members to foster greater unity at all levels so as to achieve better things for the community.
                    </p>

                    <div className="bg-amber-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-4">New Constitution Adopted:</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">
                        The new Constitution was read and adopted by the House. Under the new constitution the party became Federal in character and the rules of registration under the Societies Act required and entitled the party to form state and district branches in all the states in the Federation of Malaysia to represent the Malaysian Ceylonese political thinking.
                      </p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Red-Letter Day - March 1975</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                      The 22nd of March, 1975 went down in the History of the MCC as a red-letter day. It was on that day that the Nirwana Ballroom of the Kuala Lumpur Hilton saw the largest gathering of Ceylonese together with those at the helm of the Government. The MCC organised a tea-reception in honour of the Hon'ble Tun Abdul Razak to congratulate the Tun for the landslide victory of the Barisan Nasional and to rejoice over the appointment of Datuk (Dr) C. Sinnadurai as a Senator to represent the Malaysian Ceylonese.
                    </p>

                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg mb-4">
                      <p className="font-semibold text-[#003087] text-sm sm:text-base mb-3">Tun Abdul Razak's Speech:</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3 italic">
                        "I would like to thank the members of the Malaysian Ceylonese Congress for their support and activities which they carried out, which brought about success in the elections. I would like to say that in order to preserve this victory, we must work and give all our support to the policies and programme which are being implemented by the Government."
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 italic">
                        "Datuk (Dr) C. Sinnadurai has been in the Government service for a long time and although he is getting on in age, he is still active in the welfare and political fields. The appointment is in recognition of his many good qualities. He is now the representative of the Ceylonese community in the Dewan Negara."
                      </p>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1975-1978: Key Developments</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Revolving Scholarship Fund (1975)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Arising from the resolution made at the Central General Assembly held on Saturday 18th October 1975, a sub-committee was set up to draw up the Rules and Regulations for the scholarship fund. The Rules and Regulations of the MCC Scholarship Fund was accepted at the 1st Central Executive Council meeting held on 11th June 1976 and subsequently approved by the Registrar of Societies. With the setting up of the revolving scholarship fund, the MCC had taken positive steps towards the realisation of one of our fundamental objectives. The fund stood then at RM3,266.71.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">National Monument Restoration Fund</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The MCC Headquarters initiated a fund raising project to collect money for the National Monument Restoration Fund and with the support of the branches presented to the then Mentri Besar of Selangor, Dato Harun ldris a sum of RM1,001.00.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">MCC President in the Senate</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The MCC President Dato (Dr) C. Sinnadurai had on many occasions raised important matters pertaining to the Malaysian Ceylonese in particular and the minority communities and others in general. Amongst the matters raised by him included:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-4">
                          <li>Higher Education opportunities and training</li>
                          <li>Participation in land schemes and agro-based ventures</li>
                          <li>Constitutional amendments in respect of provisions dealing with religious institutions</li>
                          <li>Drug Abuses</li>
                          <li>Third Malaysia Plan — participation and involvement</li>
                          <li>Ceylonese representation in Statutory bodies, Boards</li>
                          <li>Employment opportunities</li>
                          <li>Citizenship and related problems</li>
                          <li>Compulsory service of medical practitioners</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Headquarters' Suite Resolution (1976)</h4>
                        <p className="text-sm text-gray-700">
                          The Biennial General Assembly held on 10th October, 1976 had approved the following Resolution: "That the Malaysian Ceylonese Congress set up a Building Fund with the view to erecting a building in Kuala Lumpur for the Congress."
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1978-1980: Continued Leadership</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">MCC National President Honoured</h4>
                        <p className="text-sm text-gray-700">
                          Our National President Tan Sri Dato (Dr) C. Sinnadurai was conferred with the Doctor of Science (Hon) by the University of Jaffna for his laudable contribution in the fields of science and medicine. He was also re-appointed to the Senate by Duli Yang Maha Mulia Yang DiPertuan Agong.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Second Biennial Central General Assembly (1979)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Second Biennial Central General Assembly was held on Sunday 18th March 1979 at 9.00 a.m. at Balai Raya, Jalan Selangor, Petaling Jaya. There were over 200 participants including 60 delegates, observers and members from the various Branches and States.
                        </p>
                        <div className="bg-amber-50 p-3 rounded border-l-4 border-[#CE0000]">
                          <p className="text-xs italic text-gray-700">
                            "We the Ceylonese have neither political power nor economic strength hence the need for an organisation like the Malaysian Ceylonese Congress so that our voice could be heard in and outside Parliament, which means we have to strengthen ourselves... M. C. C. has a definite role to play. It was up to the members to give the headquarters the confidence, greater co-operation thereby making the M. C. C. more dynamic and progressive." - Tan Sri Dato Dr. C. Sinnadurai
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1981-1982</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Third Biennial Central General Assembly (1981)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Third Biennial Central General Assembly of the MCC was held on Sunday 16th August 1981 at the Selangor Girls Guides Association Hall, Brickfields, Kuala Lumpur. There were 120 participants including 93 delegates, observers and members from the various branches and states.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Reception in Honour of Prime Minister (December 1981)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          A dinner was organized by the National Headquarters on 22nd December, 1981, to honour Y.A.B. Dato Seri Dr. Mahathir bin Mohamad as the Fourth Prime Minister of Malaysia at the Kalamandapam, Jalan Scott, Kuala Lumpur, on behalf of the Malaysian Ceylonese Community.
                        </p>
                        <p className="text-xs italic text-gray-700">
                          "We the Malaysian Ceylonese community reaffirm our pledge and our undivided loyalty and unqualified support to our King, His Brother Rulers, to you and the Government, for this is the only way we could remain as a cohesive people and help in Nation building as props and pillars and shining lights in Councils and in Parliament." - Tan Sri Dato Dr. C. Sinnadurai
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Fourth Biennial Assembly & Leadership Transition (1983)</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-purple-50 p-4 rounded-lg mb-4">
                        <p className="font-semibold text-[#003087] mb-2">Tan Sri Sinnadurai's Farewell Address</p>
                        <p className="text-xs italic text-gray-700">
                          "I feel the time has come for me to step down and give way to a younger man to lead us — a man of influence and one who is acceptable to you. I may have not achieved much but I have carried out my duties with a clear conscience. I thank you all for the support given to me over the years. You all did really make the Malaysian Ceylonese Congress something."
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">New President Elected</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Tan Sri Dato' Sri V. Jeyaratnam was declared duly elected unopposed as the President. The two other nominations — Tan Sri Dato' Dr. C. Sinnadurai and Dr. D. M. Thuraiappah withdrew. Tan Sri Dato' Dr. C. Sinnadurai was unanimously accepted as a Permanent Adviser to the Malaysian Ceylonese Congress.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-[#003087] mb-2">Vote of Thanks</p>
                        <p className="text-xs text-gray-700">
                          "This Fourth Biennial Central General Assembly of the Malaysian Ceylonese Congress held on 4th September 1983, records with deep appreciation the sincere, dedicated and valuable services rendered by the past National President Tan Sri Datuk Dr. C. Sinnadurai for the betterment, development and progress of the Malaysian Ceylonese Congress for the last 13 years. His contribution is hereby acknowledged."
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* TAN SRI V. JEYARATNAM ERA - 1983-1987 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CE0000] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#CE0000] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">🎓</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Era of Tan Sri V. Jeyaratnam</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1983 - 1987</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1983-1984</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Malaysian Ceylonese Educational Lottery Fund</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Central Executive Committee at a meeting on 24th June, 1984 unanimously agreed to the National President's proposal that the Malaysian Ceylonese Congress join hands with the Malaysian Ceylonese Education Fund (MCEF) which had a license to start a Lottery to raise funds for Scholarships. It was decided to name it Malaysian Ceylonese Education Lottery Fund and to print half a million (500,000) tickets at one dollar each.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Tamil Relief Fund</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Central Executive Council proposed and agreed to set up the Tamil's Relief Fund. Trustees were appointed: Dr. Guna Sittampatam (Medical Practitioner), Mr. T. Thanapalan (Accountant), Mr. S. Kandasivam (Lawyer), and Mr. A. Kanesalingam (Lawyer). Five thousand (5,000) appeal letters were sent out to Malaysians of Tamil origin, with about 150 persons responding and about RM27,000/- received.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Christmas Party for Underprivileged</h4>
                        <p className="text-sm text-gray-700">
                          Under the distinguished patronage of Y.B. Dato Sharir Abdul Samad, Minister of the Federal Territory, a Christmas Party was organized on 15th December, 1984 at the Brickfields Railway Club, Kuala Lumpur. More than hundred children from the Orphanages, handicapped and Spastic homes attended and enjoyed themselves in a cordial and friendly atmosphere.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1985-1986: Educational Achievements</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Education Lottery Success</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Education lottery fund realized a profit of RM227,000.00. The money was made available to the Malaysian Ceylonese Education Fund in which body the MCC was represented. The draw of the lottery was celebrated in style by hosting a dinner at the Pan Pacific Hotel on 3rd May 1986, where the prizes were drawn and a Saree Queen contest was held. About 500 members and well wishers were present. This was indeed a significant landmark in the history of the MCC and the MCEF.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Fifth Biennial Central General Assembly (1986)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The Fifth Biennial Central General Assembly of the MCC was held on Sunday 30th March 1986 at Dewan Cuepacs, Jalan Thamby Abdullah, Brickfields, Kuala Lumpur. There were over 180 persons present of which 55 were office bearers, 72 delegates and 7 officials from Headquarters making a total of 134 participants.
                        </p>
                        <div className="bg-purple-50 p-3 rounded mt-2">
                          <p className="text-xs italic text-gray-700">
                            "Top priority, as far as I can see, is Education. Closely following this would be career opportunities. Following this at a later stage will be a Socio-Economic Direction." - Tan Sri Dato Sri V. Jeyaratnam
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1987-1988</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Economic Seminar (August 1987)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          <span className="font-semibold">Theme:</span> "Strategy for our participation in our country's Economic Activities and the creation of Employment Opportunities."
                        </p>
                        <p className="text-sm text-gray-700 mb-3">
                          This seminar was held at Kuala Lumpur Merlin Hotel for two days on 8th and 9th August, 1987. About 103 members of the Ceylonese community including representatives from seven Ceylonese-based organisations participated on paying a registration fee of RM75.00 per participant.
                        </p>
                        <p className="text-xs text-gray-700">
                          Various topics were discussed including: Taking Stock of Existing Enterprises, Investment Opportunities in the Corporate Sector, Openings in Finance and Banking, Participation in the Agricultural Sector, Opportunities in the Transport Section, and Participation in Agricultural and Manufacturing Section.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Acting President Appointed</h4>
                        <p className="text-sm text-gray-700">
                          Tan Sri Datuk Seri V. Jeyaratnam resigned as President a few months before the Biennial Central General Assembly and Dr. D. M. Thuraiappah was appointed as Acting President.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* DATO' DR. N. ARUMUGASAMY ERA - 1988-1995 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#003087] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#003087] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">🏆</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Era of Dato' Dr. N. Arumugasamy</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1988 - 1998</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">National Economic Consultative Council (1989)</h3>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        The formation of the National Economic Consultative Council (NECC) was formally announced by the Government in January 1989 and held its inaugural meeting on 19th January, 1989. The aim and purpose of this Council was to bring about a more acceptable social and economic order after 1990, whereby all sections of the citizenship were expected to be more assimilated and be given a fair share of the nation's economic cake.
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          Our President, Dato (Dr) N. Arumugasamy was appointed to the NECC as a representative of the Ceylonese community which itself was sort of recognition of the MCC and the community by the Government. He was also assigned to the Manpower Resource Development Committee in which he played an active role.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1990-1992</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">7th Biennial Central General Assembly (1990)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The 7th Biennial Central General Assembly held on Sunday 24th June 1990 at the Grand Continental Hotel, Jalan Raja Laut, Kuala Lumpur. Opening address by Yang Berhormat Dato' Seri S. Samy Vellu. Dato Seri thanked the President and members of M. C. C. for having invited him to address and declare open the 7th Biennial Central General Assembly. He said, "There was close links between the Indian and Ceylonese and this invitation today goes to strengthen these."
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Vision 2020 Symposium (September 1992)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The M.C.C. jointly with JCS organized a symposium on "Vision 2020 and the Community" on 13th September, 1992 at the Cooperative College, Petaling Jaya, Selangor. The symposium was a success and well attended by the cross section of the community including students from colleges and universities.
                        </p>
                        <p className="text-xs italic text-gray-700">
                          "We in Malaysia are most fortunate in having a visionary as Prime Minister YAB Dato' Seri Dr Mahathir M has succinctly articulated the hopes and aspirations of all Malaysians in a speech that must surely rank as one of the most important ones in the history of our nation." - Dato' Dr. N. Arumugasamy
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">34th Anniversary Dinner (October 1992)</h4>
                        <p className="text-sm text-gray-700">
                          The 34th Anniversary Dinner was held on Saturday 17th October, 1992 at the Ramaisari Ballroom, Subang Merlin. It was officiated by none other than Yang Amat Berhormat Encik Abdul Ghafar Baba, Deputy Prime Minister.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1995-1997</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Headquarters Building Project</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          At the Biennial Central General Assembly held on 10th October 1976, the following Resolution was proposed by South Johore Branch and unanimously passed, "That the Malaysian Ceylonese Congress set up a Building Fund with the view to erecting a Building in Kuala Lumpur for the Congress."
                        </p>
                        <p className="text-sm text-gray-700 mb-3">
                          The Central Executive Committee (CEC) at its meeting on 31st March 1996 appointed a Building Sub Committee. It was decided to purchase an office suite covering 832 square feet of floor space at the North Point Project in Ipoh Road at RM241,116.00.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Seminar: Strategies for Development (1997)</h4>
                        <p className="text-sm text-gray-700">
                          A seminar entitled, "Strategies for the Development of the Ceylonese Community in Malaysia" was organized for members at the Shah Village Hotel in Petaling Jaya on November 23, 1997. Speakers were Datuk Prof. Khoo Kay Kim and Datuk Prof. Sothi Rachagan.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 1998-1999</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">"Jaffna Junction" Newsletter Launched (1998)</h4>
                        <p className="text-sm text-gray-700">
                          "Jaffna Junction" our Newsletter was officially launched at the fund raising dinner on July 11, 1998. All the Branches were sent sufficient number of copies for distribution among members. It even reached Perth, Australia.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Tamil Heritage Center (1999)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          A cocktail party was held at the Royal Lake Club, Kuala Lumpur in May, 1999. Its objective was to create awareness of our heritage amongst the members of the community in order to set up a heritage center. Dr. V. Siva Ananthan, the Managing Director of Nirwana College, had graciously allocated the space in the College premises for the heritage center for free.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Fathers and Mothers Day Celebration (1999)</h4>
                        <p className="text-sm text-gray-700">
                          The MCC National Women's Section held on a grand scale a function to select both 'Fathers' and 'Mothers' of the year. It was held at the Federal Hotel, Kuala Lumpur on 11th July, 1999. The auspicious occasion was graced by the Hon'ble Minister for National Unity and Social Development, Datin Paduka Zaleha Ismail who gave away the awards. Winners: Mrs Thangaratnam Rajagopal (Mother) from Sentul and Mr. S. Sundramoorthy (Father) from Kajang.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* DR. D. M. THURAIAPPAH ERA - 1998-2004 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CE0000] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-96 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#CE0000] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">📚</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Era of Dr. D. M. Thuraiappah</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">1998 - 2004</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 2000-2001</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">MCC Food & Fun Fair (June 2000)</h4>
                        <p className="text-sm text-gray-700">
                          The Food and Fun Fair initiated by the National Women's Council with the help of the Main Executive Council and the C. E. C. members, was held on the 11th of June 2000 at the premises of the Malaysian Association for the Blind, Complex MAB Kuala Lumpur. It provided a common ground for all Malaysians throughout the country to meet and mingle with each other. The project raised about RM27,000.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Workshop on Strategic Management (July 2000)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The workshop was organised by the Women's Section from 1st to 2nd July 2000. The aim of the workshop was to brainstorm the main issues of interest for the M. C. C. It was declared open by Dato' R. Veerasingam, the Parliamentary Secretary of the Ministry of National Unity and Social Development.
                        </p>
                        <p className="text-sm text-gray-700">
                          The workshop revealed that contrary to the popular misdirected belief that there is no future for the Ceylonese, the members felt that the M. C. C. should try to brace itself up and to exhaust every avenue possible, to serve its members in a better way. The Ministry of National Unity & Social Development gave a grant of RM32,400/- for the seminar.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">New Branches Inaugurated</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Since the last B.C.G.A. (22nd November 1998), the following new branches had been inaugurated:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-4">
                          <li>South Kedah - Kulim</li>
                          <li>Central Kedah – Sungei Petani</li>
                          <li>Seberang Prai – Bukit Mertajam</li>
                          <li>North Perak - Taiping</li>
                          <li>Lim Garden – Ipoh</li>
                          <li>Kepong</li>
                          <li>Taman Yarl</li>
                          <li>Cuepecs – Cheras</li>
                          <li>Temerloh</li>
                        </ul>
                        <p className="text-sm text-gray-700 mt-2">
                          With the addition of the above branches, there were a total of 23 branches nation wide.
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Workshop: "Towards Reconciliation and Nation-Building in Sri Lanka" (July 2001)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The National University of Malaya (UKM) and the Malaysian Ceylonese Congress jointly organised this "Peace" workshop. It was held at Hotel Equatorial in Bangi, Selangor from 13th to 15th July, 2001. About 20 prominent world-renowned speakers were invited to share their views and present papers. Over 60 participants attended. Various members supported the venture by way of donations and participation. A single anonymous donor donated RM20,000/-. In total about RM60,000/- was collected which was just sufficient to cover the total cost.
                        </p>
                        <p className="text-xs text-gray-700">
                          The proceedings of the Workshop have been published in a book-form for posterity. Copies have been sent to the United Nations, some foreign embassies, the Ministry of Foreign Affairs and sold to Universities, corporate bodies, individuals, Branches and members.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 2002-2003</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">13th Biennial Central General Assembly (October 2002)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The 13th Biennial Central General Assembly was officially opened by Yang Berhormat Dato' Paduka Abdul Kadir Bin Hj. Sheikh Fadzir, Mentri Kebudayaan, Kesenian & Pelancungan Malaysia on 20th October, 2002 at the Hotel Crown Princess, Jalan Tun Razak, Kuala Lumpur.
                        </p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Resolutions Passed</h4>
                        <ul className="list-disc list-inside space-y-2 text-xs text-gray-700 ml-2">
                          <li>"That the 13th BCGA of MCC held on 20th October, 2002 resolve that it strongly supports the government's move to teach Science and Mathematics in English in schools."</li>
                          <li>"That the 13th BCGA of the MCC held on 20th October, 2002 resolves that it urges the government to categorise the minority groups under the term "Minority". It also urges the Government to set up a Department of Minority Affairs under the Prime Minister's Department to look after the interest of the minority groups of the Malaysian Citizens."</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">The MCC Flag</h4>
                        <p className="text-sm text-gray-700">
                          The new MCC flag was also presented at the assembly. The 14 stripes in blue and red represented the 14 states and the Federal Territory of the Country. The background which was in beige colour was of no significance. The MCC Logo and Flag was submitted by the Penang Branch and unanimously accepted.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Fun Fair (October 2003)</h4>
                        <p className="text-sm text-gray-700">
                          The Fun Fair was organised by the Women's Section with the collaboration of the Headquarters. It was held on 12th October, 2003 at the Sekolah Kebangsaan (P) Methodist Brickfields, Kuala Lumpur. Community-related efforts included: Blood Donation campaign for Blood Bank, PEMADAM counter, AIDS Advisory counter, and Breast Cancer Advisory counter.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* DATO' DR. NKS THARMASEELAN ERA - 2004-2006 */}
          <div className="relative mb-12 sm:mb-16 pb-8 sm:pb-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#003087] border-4 border-white shadow-lg mt-2"></div>
                <div className="w-1 bg-gray-300 flex-grow min-h-0 mt-2"></div>
              </div>

              <div className="flex-1 pb-4">
                <div className="bg-[#003087] text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">🌟</span>
                    <h2 className="text-2xl sm:text-3xl font-bold">Era of Dato' Dr. NKS Tharmaseelan</h2>
                  </div>
                  <p className="text-base sm:text-lg text-gray-100">2004 - 2006</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <article>
                    <h3 className="text-lg sm:text-xl font-bold text-[#CE0000] mb-3 sm:mb-4">Period 2004-2006: New Era of Growth</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Datuk Seri S. Samy Vellu Calls for MIC-MCC Partnership (December 2004)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          At the opening of the Biennial General Assembly on Sunday 5th December 2004 at the Federal Hotel, Kuala Lumpur, MIC President Datuk Seri S. Samy Vellu said that MCC a party of 3,000 members of Sri Lankan origin, had collaborated with MIC on many issues in the past and was pleased to have a good working relationship. He assured the community that he would assist MCC should its leadership make request for help.
                        </p>
                        <p className="text-sm text-gray-700">
                          At that meeting Dato' Dr. NKS Tharmaseelan was elected as the new President with a new set of Committee members.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Permanent Secretariat</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          M.C.C. was formed in 1958 but unfortunately has had a nomadic existence. We finally have our own permanent secretariat in Kepong, at an office lot located directly opposite the Jaya Jusco shopping complex. The C. W. C. signed a "Sales and Purchase Agreement" with the owner through our lawyers and paid 10% amounting to RM13,000.00 of the total cost of RM130,000.00.
                        </p>
                        <p className="text-xs text-gray-700">
                          The premise is at: No: 75-3-A-I, Jalan Metro Perdana Barat 1, Taman Usahawan, Kepong Utara, Kuala Lumpur
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">MCC Youth Section Achievements</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          The MCC Youth Section under the able leadership of Dr. Kantha Rasalingam and Dr. Raj Kumar Maharaj, "have been creating ripples". The MCC Youth held a well attended economic seminar. This followed with a series of successful sports events. They organised the well publicised and tremendously successful Miss Malaysia — Sri Lanka pageant.
                        </p>
                        <p className="text-xs text-gray-700">
                          The function was officiated by the Deputy Minister of Culture, Arts and Heritage, Y.B. Datuk Wong Kam Hoong. The Youth have donated the RM10,000/- to M.C.C. which was donated for the function by the Ministry.
                        </p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">National Council of Minority Organisations (NCMO)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          Eleven associations representing minorities in Malaysia agreed to form the National Council of Minority Organisation (NCMO) and have chosen Datuk M. Kayveas (President People's Progressive Party (PPP)) as their President. The eleven (11) associations have agreed to form a 'Mini Barisan Nasional' under the P.P.P umbrella and pledged the support for Barisan Nasional.
                        </p>
                        <p className="text-xs text-gray-700 mb-2">
                          The associations include: Bengali Association, Malaysian Ceylonese Congress, Malaysian Indian Muslim Congress, Malacca Portuguese Eurasian Association, Malaysian Sikh Union, Melaka Baba Nyonya Association, Pakistani People's Association, Punjabi Party of Malaysia, Selangor People's Education Hall, Siamese Association of Malaysia, and Telugu Association.
                        </p>
                        <p className="text-xs text-gray-700">
                          Recently four (4) new groups have joined making fifteen (15) associations: Gurkha Association, Toa Studies Association, Penang Eurasian Association and Subang Jaya Senior Citizens Club.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#003087] mb-2">Extensive Branch Development</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          MCC now has the largest number of branches in its history. MCC formed 11 new branches since December 2004 and more have been submitted for approval to ROS.
                        </p>
                        <p className="text-xs text-gray-700 mb-2 font-semibold">New Branches Inaugurated:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-4 mb-3">
                          <li>MCC Petaling Jaya Central - launched 15th May 2005 (Chairperson: Miss Rasamani Kandiah, membership: 100+)</li>
                          <li>MCC Raub - launched 15th June 2005 (Chairman: Mr. Sivagurunathan, 40 members mostly youth)</li>
                          <li>MCC Kuantan (East Pahang) - inaugurated 15th June 2005 (Chairman: Dr. Jeyasingam, 100+ members)</li>
                          <li>MCC Alor Star - launched 2nd July 2005 (Chairman: Mr. Sivaratnam, 50 members)</li>
                          <li>MCC Kajang Utama (Chairman: Mr. Manogharan) - inaugurated 8th January 2006</li>
                          <li>MCC Taman Megah Cheras (Chairman: Mr. R. S. Nathan) - inaugurated 8th January 2006</li>
                          <li>MCC Seri Gombak (Chairman: Mr. Thirujanasambanther) - inaugurated 12th February 2006</li>
                        </ul>
                        <p className="text-xs text-gray-700 mb-2">
                          MCC Brickfields, MCC Old Klang Road, MCC Ampang, MCC Central Johore have obtained registration from the ROS and were due to be inaugurated soon.
                        </p>
                        <p className="text-xs text-gray-700">
                          MCC has submitted applications from MCC Titiwangsa, MCC Kinta Valley and MCC Mantin for approval to the ROS.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Political Engagement</h4>
                        <p className="text-xs text-gray-700 mb-2">
                          A letter sent to the Prime Minister was promptly replied and the President met with the personal secretary of the Prime Minister at the P.M.'s Putra Jaya Office. The message was crystal clear:
                        </p>
                        <p className="text-xs italic text-gray-700 mb-3">
                          "Make the Ceylonese community relevant. Increase your membership. Increase the number of branches. Spread your wings. We will come looking for you when you become relevant."
                        </p>
                        <p className="text-xs text-gray-700">
                          The President, the Deputy President Mr. S. Sivakumaran and the Secretary General, Mr. C. Nadarajah paid a courtesy call on Dato' Seri Samy Vellu at his office on the 24th of March 2005. It was a very cordial meeting and the MIC President has promised to work closely with MCC.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#003087] mb-2">Media Coverage</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          MCC has been given publicity in all the National dailies including Astro News. The President, Dato' Dr. NKS Tharmaseelan was interviewed in the Malaysian Nanban and The Star. The M.C.C. Youth's Miss Malaysia — Sri Lanka pageant was widely reported. Many MCC branches in the Klang Valley had their activities published in the national dailies with photographs.
                        </p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-[#CE0000]">
                        <h4 className="font-semibold text-[#003087] mb-2">Extract from "Sunday Star" - 27th March 2005</h4>
                        <p className="text-sm font-semibold text-gray-900 mb-2">Standing up for the Ceylonese</p>
                        <p className="text-xs text-gray-700 mb-3 italic">
                          "The Ceylonese community in Malaysia feel themselves to be 'the forgotten race' and chaff at having lost their political place in the sun. Today, they want to be counted." - SUHAINI AZNAM
                        </p>
                        <p className="text-xs text-gray-700 mb-2">
                          Small and marginalized but educated and enterprising, Malaysian of Ceylonese Tamil descent do not know their actual numbers because they are lumped together under the grey label of "others". Mainly from Jaffna and Trincomalee, they were brought in by the British in the 1920s and 1930s as administrators to Malaya's rubber estates and railroads.
                        </p>
                        <p className="text-xs text-gray-700 mb-2">
                          Today's Malaysian Ceylonese is highly literate, have a strong command of English and gravitate easily to the professions. Medicine, law and engineering are favorites. But where Ceylonese used to occupy 10% of the seats in university, today they are relegated to only 1% or 2%, said newly elected Congress president Datuk Dr. N.K.S. Tharmaseelan.
                        </p>
                        <p className="text-xs italic text-gray-700">
                          "We are not a superior race. We just don't want to be the first of the lost races of Malaysia. We were born Ceylonese, so we want to pass on our culture and language to our children." - Dato' Dr. NKS Tharmaseelan
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#003087] to-[#CE0000] text-white rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">A Legacy of Service</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              From 1900 to 2006, the Malaysian Ceylonese community has demonstrated remarkable resilience, unity, and dedication to preserving their cultural heritage while contributing significantly to the development of Malaysia.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              The Malaysian Ceylonese Congress continues to serve as the voice of the community, working tirelessly to safeguard the political, educational, social, and cultural interests of Malaysian Ceylonese while fostering inter-racial harmony and contributing to nation-building.
            </p>
          </div>
        </div>
      </section>

     
    </main>
  )
}
