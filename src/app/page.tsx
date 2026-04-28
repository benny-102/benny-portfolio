import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Benny Adenugba-Omonubi
        </h1>

        <p className="text-xl text-gray-400">
          Data Analyst
        </p>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Turning complex data into actionable business insights using Python, SQL, and Power BI, 
          with experience in predictive modeling and real-world data analysis.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap mt-4">

          <a 
            href="/Benny_Adenugba_Data_Analyst_Resume.pdf" 
            className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Download Resume
          </a>

          <a 
            href="https://github.com/benny-102"
            target="_blank"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            GitHub
          </a>

        </div>

        {/* SKILLS */}
        <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-400 mt-2">
          <span>Python</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          ⭐ Featured Project
        </h2>

        <Link href="https://github.com/benny-102/fraud-detection-risk-intelligence" target="_blank">
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 p-8 rounded-2xl hover:scale-[1.02] transition duration-300 cursor-pointer border border-blue-800">

            <h3 className="text-2xl font-bold mb-3">
              Fraud Detection & Risk Intelligence System
            </h3>

            <p className="text-gray-300 mb-4">
              Built a hybrid fraud detection system combining rule-based risk scoring with 
              Isolation Forest anomaly detection to identify suspicious financial transactions.
            </p>

            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Engineered fraud signals (velocity, geo-risk, high-value transactions)</li>
              <li>• Implemented anomaly detection using Isolation Forest</li>
              <li>• Designed risk scoring system for real-time fraud classification</li>
              <li>• Built interactive Power BI dashboard for fraud monitoring</li>
            </ul>

          </div>
        </Link>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mt-24 max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        {/* BUSINESS ANALYTICS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Business Analytics
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="https://github.com/benny-102/superstore-sales-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 hover:bg-gray-800 transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">
                  Retail Sales Performance Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Identified loss-making products and uncovered how discount strategies negatively impacted profitability.
                </p>
              </div>
            </Link>

            <Link href="https://github.com/benny-102/olist-sql-powerbi-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 hover:bg-gray-800 transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">
                  E-commerce Performance & Delivery Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Analyzed customer and delivery data to uncover revenue concentration and delivery impact on satisfaction.
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* PREDICTIVE ANALYTICS */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Predictive Analytics
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="https://github.com/benny-102/tiktok-video-verification-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 hover:bg-gray-800 transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">
                  TikTok Verification Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Built a classification model to identify factors influencing content verification.
                </p>
              </div>
            </Link>

            <Link href="https://github.com/benny-102/waze-user-churn-analysis-ml" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 hover:bg-gray-800 transition duration-300 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">
                  Waze Churn Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Developed churn prediction models and identified engagement as a key driver.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mt-24 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I am a data analyst with a background in physiology and a strong interest in solving real-world problems using data. 
          I specialize in data cleaning, analysis, visualization, and machine learning.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Through hands-on projects, I have built end-to-end data solutions — from raw data processing to predictive modeling 
          and business intelligence dashboards — helping translate complex data into actionable insights.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="mt-24 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="text-gray-400">
          Feel free to reach out or connect with me
        </p>

        <div className="flex justify-center gap-6 flex-wrap mt-4">

          <a 
            href="mailto:bennyadenugba@gmail.com"
            className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-200 transition"
          >
            Email
          </a>

          <a 
            href="https://github.com/benny-102"
            target="_blank"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/benny-adenugba-omonubi-842a28298/"
            target="_blank"
            className="border border-gray-600 px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>

        </div>
      </section>

    </main>
  );
}