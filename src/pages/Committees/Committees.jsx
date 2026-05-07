// Committees.jsx
import "./Committees.css";

function Section({ title, items }) {
  return (
    <section className="committee-section">
      <div className="section-title">{title}</div>

      <ul className="committee-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Committees() {
  const leftColumn = [
    {
      title: "General Chair",
      items: [
        "Jnyana Ranjan Mohanty, MLRIT, India",
        "Khaled Fouad Sayed Shaalan, BUiD, Dubai",
        "Debashish Das, Birmingham City University, UK",
      ],
    },

    {
      title: "Organizing Chairs",
      items: [
        "Sushruta Mishra, MLRIT, India",
        "Kshira Sagar Sahoo, SRMU, India",
      ],
    },

    {
      title: "Finance Chairs",
      items: ["N. Biraja Isac, MLRIT, India"],
    },

    {
      title: "Registration Chairs",
      items: [
        "Suneeta Mohanty, MLRIT, India",
        "Santwana Sagnika, MLRIT, India",
        "Pratyusha Mukherjee, MLRIT, India",
      ],
    },

    {
      title: "Workshop Chairs",
      items: [
        "Ajit Kumar Pasayat, MLRIT, India",
        "Prabhu Prasad Dev, MLRIT, India",
      ],
    },
  ];

  const rightColumn = [
    {
      title: "Program Chairs",
      items: [
        "Hrudaya Kumar Tripathy, MLRIT, India",
        "Sambit Kumar Mishra, SRMU, India",
        "Tarek Gaber, University of Salford, UK",
      ],
    },

    {
      title: "Publication Chairs",
      items: [
        "Junali Jasmine Jena, MLRIT, India",
        "Satya Ranjan Dash, MLRIT, India",
        "Anuja Kumar Acharya, MLRIT, India",
      ],
    },

    {
      title: "Publicity Chairs",
      items: [
        "Adyasha Dash, MLRIT, India",
        "Kunal Anand, MLRIT, India",
      ],
    },

    {
      title: "Session Management Chairs",
      items: [
        "Jagannath Singh, MLRIT, India",
        "Partha Pratim Sarangi, MLRIT, India",
        "Lalit Kumar Vashishtha, MLRIT, India",
      ],
    },

    {
      title: "Special Session Chairs",
      items: [
        "Muhammad Ehsan Rana, Asia Pacific University, Malaysia",
        "Lambodar Jena, SOA, India",
        "Hiren Kumar Thakkar, Pandit Deendayal Energy University, Gujarat, India",
      ],
    },
  ];

  const chairMembers = [
    "Abhaya Kumar Sahoo, MLRIT, India",
    "Bhaswati Sahoo, MLRIT, India",
    "Lipika Mohanty, MLRIT, India",
    "Rabindra Barik, MLRIT, India",
  ];

  const technicalMembers = [
    "Xiaohui Tao, University of Southern Queensland, Australia",
    "Zakaria Boulouard, LIM, Hassan II University of Casablanca, Morocco",
    "Mariya Ouaissa, Moulay Ismail University, Meknes, Morocco",
    "Celestine IWENDI, School of Creative Technologies, University of Great Manchester, Bolton",
    "Pravakar Garnayak, Microsoft, Greater Seattle Area, USA",
    "P. Sanjeevikumar, Aarhus University, Herning, Denmark",
    "Junaidy B. Sanger, Universitas Katolik De La Salle, Indonesia",
    "Lyudmila Mihaylova, The University of Sheffield, UK",
    "Puneet Sharma, Unitedworld Institute of Technology, Karnavati University, India",
    "Sergio D. Correia, Portalegre Polytechnic University, Portugal",
    "Rasoul Khandan, University of Greenwich, UK",
    "Noha Ahmed Mostafa, The British University in Egypt, Cairo",
    "Karim Ouazzane, London Metropolitan University, UK",
    "Krishnendu Guha, University College Cork, Ireland",
    "Richard Alexander, University of London, UK",
    "Pamela Chaudhury, SIT, India",
    "Manoj Babu, University of Warwick, UK",
    "T Kishore Kumar, National Institute of Technology, Warangal, India",
    "Chris Lane, London Metropolitan University, UK",
    "Ferdous Ahmed Barbhuiya, IIIT Guwahati, India",
    "Tarek Ali, Manchester Metropolitan University, UK",
    "Rania Hodhod, Columbus State University, Columbus, USA",
    "Raed Masadeh, University of Jordan, Jordan",
    "Ankit Kumar Jain, National Institute of Technology, Kurukshetra",
    "Rishav Singh, National Institute of Technology, Delhi",
    "Raj Sharman, University at Buffalo, USA",
    "Sardar M. N. Islam (Naz), Victoria University, Australia",
    "Mohamed Meselhy Eltoukhy, University of Jeddah, Saudi Arabia",
    "Prasun Sinha, Ohio State University Columbus, Ohio, US",
    "Shashidhara R, Blockchain Architect, Samsung R & D Institute, India",
    "Mohamed TAHOUN, Suez Canal University, Ismailia, Egypt",
    "AYO Femi Emmanuel, Olabisi Onabanjo University, Nigeria",
    "Roshidi bin Din, Universiti Utara, Malaysia",
    "Wai-keung Fung, Cardiff Metropolitan University, UK",
    "Mohamed W. Abo EI-Soud, Majmaah University, KSA",
    "Ma'en Tayseer, Jadara University, Jordan",
    "Paola Barra, Parthenope University of Naples, Italy",
    "Sandeep Kumar Jangam, Infosys Limited, USA",
    "Tridiv Swain, National University Of Singapore, Singapore",
    "Quoc-Viet PHAM, Pusan National University, South Korea",
    "Victor Hugo C. de Albuquerque, Federal University of Ceará, Brazil",
    "Prasanti Manda, University of North Carolina at Greensboro, US",
    "Shafiz Mohd Yusof, University of Wollongong, Dubai, UAE",
    "Sibanjan Das, Service Now, India",
    "Biswapratap Singh Sahoo, Samsung R&D Institute Bangalore, India",
    "Ahmed Ali, Prince Sattam Bin Abdulaziz University, Saudi Arabia",
    "Joseph Bamidele AWOTUNDE, University of Ilorin, Nigeria",
    "Suchada Sitjongsataporn, Mahanakorn University of Technology, Thailand",
    "Sitthichai Ruchayosyothin, Sukhothai Thammathirat Open University, Thailand",
    "Bhabani Sankar Prasad Mishra, MLRIT, India",
    "Anuja Kumar Acharya, MLRIT, India",
    "Minakhi Rout, MLRIT, India",
    "Namita Panda, MLRIT, India",
    "Lipika Mohanty, MLRIT, India",
    "Dayal Kumar Behera, MLRIT, India",
    "Vazeerudeen Hameed, Asia Pacific University, Malaysia",
    "Vinothini Kasinathan, Asia Pacific University, Malaysia",
    "Manjusha Pandey, MLRIT, India",
    "Aleena Swetapadma, MLRIT, India",
    "Suchismita Rout, MLRIT, India",
    "Murugananthan Velayutham, Asia Pacific University, Malaysia",
    "Nowshath Kadhar Batcha, Asia Pacific University, Malaysia",
    "Mohamad Affan Mohd Noh, Asia Pacific University, Malaysia",
    "Paolo Barsocchi, ISTI-CNR, Italy",
    "Mostafa Al-Emran, The British University in Dubai, UAE",
    "Apriandy Angdresey, Universitas Katolik De La Salle, Indonesia",
    "Chinmaya Dehury, University of Tartu, Estonia",
    "Sung-Bae Cho, Yonsei University, Seoul, Korea",
    "Esraa Eldesouky, Prince Sattam Bin Abdulaziz University, Saudi Arabia",
    "Dac-Nhuong Le, Haiphong University, Vietnam",
    "ABIODUN Moses Kazeem, Landmark University, Nigeria",
    "Suresh Babu, ServisBOT, Dublin, Ireland",
    "Somya Mohanty, University of North Carolina at Greensboro, USA",
    "Piyush Maheshwari, The British University in Dubai, UAE",
    "Immanuela P. Saputro, Bina Nusantara University, Jakarta, Indonesia",
    "Anand Nayyar, Duy Tan University, Da Nang, Vietnam",
    "Ranjeet Kumar Rout, National Institute of Technology, Srinagar, India",
    "Angelia Melani Adrian, De La Salle Catholic University, Indonesia",
    "Chandresh Kumar Maurya, Indian Institute of Technology, Indore",
    "Alfonso González Briones, Complutense University of Madrid",
    "Akash Kumar Bhoi, Sikkim Manipal University, India",
    "Tejtasin Phiasai, Sukhothai Thammathirat Open University, Thailand",
    "Sivaramakrishnan Guruvayur, Aaquarians AI, Dubai",
    "Mayouf Mouna Sarbine, Capgemini Engineering, France",
    "Zaineb Chelly Dagdia, Paris Saclay University, France",
    "Rajeev Sharma, Deakin University, Australia",
    "J Joshua Thomas, UOW Malaysia, KDU Penang University College, Malaysia",
    "Achyut Shankar, WMG University of Warwick, United Kingdom",
    "Rajinder Sandhu, TD Ontario, Canada",
    "Joel J. P. C. Rodrigues, Federal University of Piaui, Brazil",
    "Ghulam E Mustafa Abro, KFUPM, Saudi Arabia",
    "Mamoun Alazab, Charles Darwin University, Australia",
    "Ahmed A. Elngar, Beni-Suef University, Egypt",
    "Ahmed Alkhayyat, The Islamic University, Iraq",
    "Zween Abdullah, Perdana University, Malaysia",
    "Seifidine Kadry, Noroff University College, Norway",
    "Loganathan Veeramuthu, NTUT, Taiwan",
    "Chandrashekar Dutt Challa, Virginia State University, USA",
    "Dionysios Demetis, University of Hull, UK",
    "Yasser Al Helaly, Nova University, USA",
    "Pradeep Kumar Mallick, MLRIT, India",
    "Mário Caldeira, Technical University of Lisbon",
    "Vishnu S. Pendyala, San Jose State University, USA",
    "George Sammour, King Talal School of Business Technology, Jordan",
    "Gianluigi Ferrari, University of Parma, Italy",
    "Bharanidharan Shanmugam, Charles Darwin University, Australia",
    "Hitesh Mohapatra, MLRIT, India",
    "Vijayakumar Varadarajan, UTS Sydney, Australia",
    "Manoj Maharaj, University of KwaZulu Natal, South Africa",
    "Mariyam Ouaissa, Chouaib Doukkali University, Morocco",
    "Dharm Singh Jat, Namibia University of Science and Technology, Namibia",
    "Prasanta Kumar Ghosh, Indian Institute of Science (IISc), Bangalore, India",
    "Thinagaran Perumal, UPM, Malaysia",
    "Dhanasekaran R, Debre Birhan University, Ethiopia",
    "Muthumurugan, ISYX Technologies, Dubai",
    "Naveen Chilamkurti, La Trobe University, Australia",
    "Jacintha Menezes, Majan University College, Oman",
    "Tanmoy Maitra, MLRIT, India",
    "Kadry Seifedine, Beirut Arab University, Lebanon",
    "Mohammed Alahmadi, University of Jeddah, Saudi Arabia",
    "Pradeep Kumar Roy, IIT Surat, India",
    "Koppala Guravaiah, IIT Kottayam, India",
    "Adel Albshri, University of Jeddah, Saudi Arabia",
    "Nilamadhab Mishra, VIT Bhopal University, India",
  ];

  return (
    <div className="committees-page">
      <div className="committees-grid">
        <div className="column">
          {leftColumn.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div className="column">
          {rightColumn.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>

      <div className="technical-wrapper">
        <div className="section-title technical-title">
          Technical Program Committee
        </div>

        <h2 className="technical-heading">Chairs:</h2>

        <ul className="technical-chair-list">
          {chairMembers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="technical-heading members-heading">Members</h2>

        <div className="members-grid">
          <ul className="committee-list">
            {technicalMembers
              .slice(0, Math.ceil(technicalMembers.length / 2))
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>

          <ul className="committee-list">
            {technicalMembers
              .slice(Math.ceil(technicalMembers.length / 2))
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Committees;