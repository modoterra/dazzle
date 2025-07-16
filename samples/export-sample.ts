// Testing export syntax highlighting

export default AuxmodoHome;

export const namedExport = "test";

export function exportedFunction() {
  return "exported";
}

export class ExportedClass {
  constructor() {}
}

export { ExportedClass as RenamedExport };

export * from './other-module';