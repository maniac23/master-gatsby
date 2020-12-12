import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
  return S.list()
    .title('Slick slices')
    .items([
      S.listItem()
        .title('Home page')
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
