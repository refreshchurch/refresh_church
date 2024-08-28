"use client"

export default function Beliefs() {
  const beliefs = [
    { title: "1. Holy Bible", blurb: "The Holy Bible, and only the Bible, is the authoritative Word of God. It alone is the final authority in determining all doctrinal truths. In its original writing, it is inspired, infallible and inerrant (II Timothy 3:16; II Peter 1:20-21; Proverbs 30:5; Romans 16:25-26)." },
    { title: "2. The Trinity", blurb: "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit." },
    { title: "3. Jesus Christ", blurb: "We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, and redemptive death." },
    { title: "4. Salvation", blurb: "We believe that salvation is a free gift from God, received by faith in Jesus Christ." },
    { title: "5. Baptism", blurb: "We believe in water baptism by immersion as a public declaration of faith in Jesus Christ." },
    { title: "6. The Holy Spirit", blurb: "We believe in the present ministry of the Holy Spirit, who empowers believers to live a godly life." },
    { title: "7. The Church", blurb: "We believe in the Church as the body of Christ, called to fulfill the Great Commission." },
    { title: "8. Communion", blurb: "We believe in the Lord’s Supper as a remembrance of Christ’s sacrifice and a celebration of our salvation." },
    { title: "9. The Return of Christ", blurb: "We believe in the personal and imminent return of our Lord Jesus Christ." },
    { title: "10. Eternity", blurb: "We believe in the resurrection of both the saved and the lost: the saved to eternal life and the lost to eternal separation from God." },
    { title: "11. The Kingdom of God", blurb: "We believe in the Kingdom of God, both present and future, and the responsibility of the Church to live and proclaim it." },
    { title: "12. Marriage", blurb: "We believe in the sanctity of marriage as a lifelong union between one man and one woman." },
    { title: "13. The Family", blurb: "We believe that the family is the foundational institution of human society, ordained by God." },
    { title: "14. The Sanctity of Life", blurb: "We believe in the sanctity of human life, created by God in His image and worthy of protection from conception to natural death." }
  ];

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      {/* Page Title */}
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Our Beliefs</h2>

      {/* Hero Blurb */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 text-center">
        <p className="text-lg text-gray-700">
          Our goal as a church is to create an environment where you can come and be refreshed by all that God is doing. We believe God wants you to experience greater life, greater relationships, and a greater sense of purpose! See below how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Refresh guide our decisions as a church.
        </p>
      </div>

      {/* Church Slogan */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-primary lowercase">every person refreshed. every purpose discovered.</h3>
      </div>

      {/* Beliefs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {beliefs.map((belief, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4">{belief.title}</h3>
            <p className="text-gray-700 text-lg">{belief.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
