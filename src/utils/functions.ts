import { Project } from "../pages/Projects/interfaces";

export function arrayToMap(arr: Project[]): Map<number, Project> {
    const resultMap = new Map<number, Project>();
    arr.forEach(item => {
      resultMap.set(item.id, item);
    });
    return resultMap;
  }