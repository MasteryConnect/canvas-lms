//
// Copyright (C) 2013 - present Instructure, Inc.
//
// This file is part of Canvas.
//
// Canvas is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, version 3 of the License.
//
// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
// details.
//
// You should have received a copy of the GNU Affero General Public License along
// with this program. If not, see <http://www.gnu.org/licenses/>.

import Backbone from '@canvas/backbone'

import template from '../../jst/gradeChangeLoggingItem.handlebars'

export default class GradeChangeLoggingItemView extends Backbone.View {
  static initClass() {
    this.prototype.tagName = 'tr'
    this.prototype.className = 'logitem'
    this.prototype.template = template
  }
}
GradeChangeLoggingItemView.initClass()
