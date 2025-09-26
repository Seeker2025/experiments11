export const container = document.querySelector('.tui-pagination');
export const options = {
    totalItems: 20,
     itemsPerPage: 10,
     visiblePages: 5,
    page: 1,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="box04 tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="box03 tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="box05 tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="box06 tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="box07 tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
    };