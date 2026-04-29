import React from "react";
import PageTransition from "../../components/PageTransition";
import { Container } from "@mui/material";

export default function About() {
  return (
    <PageTransition>
      <div className="py-24 bg-(--bg_color)">
        <Container>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-(--main_color) mb-3">
              About Us
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-(--color_heading) mb-6 leading-tight">
              A better way to shop tech accessories
            </h1>

            <p className="text-gray-600 text-lg leading-8">
              We create a simple and enjoyable shopping experience by bringing
              you carefully selected products that fit your lifestyle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-(--border_color)">
              <h2 className="text-xl font-semibold mb-3 text-(--color_heading)">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-7">
                To simplify your shopping journey and provide high-quality
                accessories that make everyday tech more useful and enjoyable.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm border border-(--border_color)">
              <h2 className="text-xl font-semibold mb-3 text-(--color_heading)">
                What We Offer
              </h2>

              <p className="text-gray-600 leading-7">
                A curated selection of products, smooth navigation, and features
                like favorites and blog insights to help you make better
                choices.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-(--color_heading)">
              Why choose us?
            </h3>

            <p className="text-gray-600 leading-8">
              We focus on quality, simplicity, and a seamless user experience —
              so you spend less time searching and more time enjoying your
              products.
            </p>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
