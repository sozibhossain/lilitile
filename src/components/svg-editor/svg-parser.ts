import * as cheerio from "cheerio";

interface PathData {
  id: string;
  d: string;
  fill?: string;
  originalFill?: string;
}

interface SvgData {
  id: string;
  name: string;
  viewBox: string;
  width: string;
  height: string;
  paths: PathData[];
}

export function parseSvgString(svgString: string, svgId: string): SvgData {
  const $ = cheerio.load(svgString, { xmlMode: true });
  const svgElement = $("svg");

  if (!svgElement.length) {
    throw new Error("Invalid SVG string");
  }

  const paths: PathData[] = [];
  svgElement.find("path").each((index, path) => {
    const pathData: PathData = {
      id: $(path).attr("id") || `path-${index}`,
      d: $(path).attr("d") || "",
      fill: $(path).attr("fill") || undefined,
      originalFill: $(path).attr("fill") || undefined,
    };
    paths.push(pathData);
  });

  return {
    id: svgId,
    name: svgId,
    viewBox: svgElement.attr("viewBox") || "0 0 100 100",
    width: svgElement.attr("width") || "100%",
    height: svgElement.attr("height") || "100%",
    paths,
  };
}
