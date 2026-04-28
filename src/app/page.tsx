import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Benny Adenugba-Omonubi
        </h1>

        <p className="text-xl text-blue-400 font-medium">
          Data Analyst • Machine Learning • Business Intelligence
        </p>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I build data-driven systems that transform raw data into actionable insights, 
          combining analytics, machine learning, and dashboards to solve real-world problems.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 flex-wrap mt-6">

          <a 
            href="/Benny_Adenugba_Data_Analyst_Resume.pdf" 
            className="bg-blue-500 text-black px-6 py-2 rounded-xl hover:bg-blue-400 transition font-semibold"
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

        {/* STACK */}
        <div className="flex justify-center gap-4 flex-wrap text-sm text-gray-400 mt-3">
          <span>Python</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Machine Learning</span>
          <span>Analytics</span>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-28 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Project
        </h2>

        <Link href="https://github.com/benny-102/fraud-detection-risk-intelligence" target="_blank">
          <div className="bg-gradient-to-br from-blue-900/40 via-gray-900 to-black p-8 rounded-2xl border border-blue-800 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition duration-300 cursor-pointer">

            <h3 className="text-2xl font-bold mb-3">
              Fraud Detection & Risk Intelligence System
            </h3>

            <p className="text-gray-300 mb-5 leading-relaxed">
              End-to-end fraud detection pipeline combining rule-based scoring and 
              anomaly detection to identify suspicious financial transactions in real time.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
              <p>• Feature engineering (velocity, geo-risk, high-value)</p>
              <p>• Isolation Forest anomaly detection</p>
              <p>• Risk scoring system (interpretable)</p>
              <p>• Power BI dashboard for monitoring</p>
            </div>

          </div>
        </Link>
      </section>

      {/* PROJECTS */}
      <section className="mt-28 max-w-5xl mx-auto space-y-14">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        {/* BUSINESS */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Business Analytics
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="https://github.com/benny-102/superstore-sales-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-[1.03] hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">
                  Retail Sales Performance
                </h3>
                <p className="text-gray-400 text-sm">
                  Identified profit leakage and optimized pricing strategies using sales data.
                </p>
              </div>
            </Link>

            <Link href="https://github.com/benny-102/olist-sql-powerbi-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-[1.03] hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">
                  E-commerce Delivery Analysis
                </h3>
                <p className="text-gray-400 text-sm">
                  Revealed how delivery delays impact customer satisfaction and revenue.
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* ML */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Predictive Analytics
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="https://github.com/benny-102/tiktok-video-verification-analysis" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-[1.03] hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">
                  TikTok Verification Model
                </h3>
                <p className="text-gray-400 text-sm">
                  Built classification model to predict content verification using engagement signals.
                </p>
              </div>
            </Link>

            <Link href="https://github.com/benny-102/waze-user-churn-analysis-ml" target="_blank">
              <div className="bg-gray-900 p-6 rounded-2xl hover:scale-[1.03] hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">
                  Waze Churn Prediction
                </h3>
                <p className="text-gray-400 text-sm">
                  Predicted churn and identified engagement as a key retention driver.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-28 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I specialize in building end-to-end data solutions — from raw data processing 
          to machine learning and dashboard visualization.
        </p>

        <p className="text-gray-400 leading-relaxed">
          My focus is on solving real-world problems using data, creating systems that 
          are not just accurate, but interpretable and actionable for decision-making.
        </p>
      </section>

      {/* CONTACT */}
      <section className="mt-28 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <div className="flex justify-center gap-6 flex-wrap mt-4">

          <a 
            href="mailto:bennyadenugba@gmail.com"
            className="bg-blue-500 text-black px-6 py-2 rounded-xl hover:bg-blue-400 transition"
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