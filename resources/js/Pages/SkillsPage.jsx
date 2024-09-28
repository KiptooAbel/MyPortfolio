import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';

const SkillsPage = () => {
  const skills = [
    { name: 'Laravel', level: 90 },
    { name: 'React', level: 85 },
    { name: 'PHP', level: 95 },
    { name: 'MySQL', level: 80 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'C/C++', level: 70 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'D3.js', level: 78 },
    { name: 'Web Design', level: 88 },
  ];

  const d3Container = useRef(null);

  useEffect(() => {
    if (skills && d3Container.current) {
      const svg = d3.select(d3Container.current);
      
      // Clear any existing elements
      svg.selectAll("*").remove();

      const width = 600;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const pie = d3.pie()
        .value(d => d.level)
        .sort(null);

      const arc = d3.arc()
        .innerRadius(radius * 0.5)
        .outerRadius(radius * 0.8);

      const outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

      const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const path = g.selectAll("path")
        .data(pie(skills))
        .enter().append("path")
        .attr("fill", (d, i) => color(i))
        .attr("d", arc)
        .each(function(d) { this._current = d; });

      const text = g.selectAll("text")
        .data(pie(skills))
        .enter().append("text")
        .attr("dy", ".35em")
        .text(d => d.data.name);

      function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
      }

      text.transition().duration(1000)
        .attrTween("transform", function(d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function(t) {
            const d2 = interpolate(t);
            const pos = outerArc.centroid(d2);
            pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
            return `translate(${pos})`;
          };
        })
        .styleTween("text-anchor", function(d) {
          this._current = this._current || d;
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function(t) {
            const d2 = interpolate(t);
            return midAngle(d2) < Math.PI ? "start" : "end";
          };
        });

      path.transition().duration(1000)
        .attrTween("d", function(d) {
          const interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function(t) {
            return arc(interpolate(t));
          };
        });
    }
  }, [skills]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold mb-8">My Arcane Arsenal</h2>
      <svg
        className="d3-component"
        width={600}
        height={400}
        ref={d3Container}
      />
    </motion.div>
  );
};

export default SkillsPage;
