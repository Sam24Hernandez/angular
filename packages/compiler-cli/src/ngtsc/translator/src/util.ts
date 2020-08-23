/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';

// HACK: Use this in place of `ts.createTemplateMiddle()`.
// Revert once https://github.com/microsoft/TypeScript/issues/35374 is fixed
export function createTemplateMiddle(cooked: string, raw: string): ts.TemplateMiddle {
  const node: ts.TemplateLiteralLikeNode = ts.createTemplateHead(cooked, raw);
  (node.kind as ts.SyntaxKind) = ts.SyntaxKind.TemplateMiddle;
  return node as ts.TemplateMiddle;
}

// HACK: Use this in place of `ts.createTemplateTail()`.
// Revert once https://github.com/microsoft/TypeScript/issues/35374 is fixed
export function createTemplateTail(cooked: string, raw: string): ts.TemplateTail {
  const node: ts.TemplateLiteralLikeNode = ts.createTemplateHead(cooked, raw);
  (node.kind as ts.SyntaxKind) = ts.SyntaxKind.TemplateTail;
  return node as ts.TemplateTail;
}
